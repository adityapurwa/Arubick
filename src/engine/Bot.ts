import * as fs from 'fs';
import * as path from 'path';
import { ANTLRInputStream, CommonTokenStream } from 'antlr4ts';
import { ArubickLexer } from '../antlr/ArubickLexer';
import { ArubickParser, AssignContext } from '../antlr/ArubickParser';
import ExpressionSolver from './solver/ExpressionSolver';
import StatementSolver from './solver/StatementSolver';
import RootSolver from './solver/RootSolver';

export default class Bot {
  private source: string;
  private sourceDirectory: string;

  public load(filename: string): Promise<void> {
    return new Promise((resolve, reject) => {
      fs.readFile(filename, 'utf8', (err, data) => {
        if (err) {
          reject(err);
        } else {
          this.source = data;
          this.sourceDirectory = path.dirname(filename);
          resolve();
        }
      });
    });
  }

  public run(): void {
    const charStream = new ANTLRInputStream(this.source);
    const lexer = new ArubickLexer(charStream);
    const tokenStream = new CommonTokenStream(lexer);
    const parser = new ArubickParser(tokenStream);

    RootSolver.workingDirectory = this.sourceDirectory;

    const program = parser.program();
    const metadata = {
      name: program.botDefinition().ID().text,
      version: program
        .botDefinition()
        .NUMBER()
        .join('.')
    };

    // Anything outside main is only allowed for global storage definition
    // Variable is not allowed and will be ignored
    const globalStorage = program.statement().filter(stmt => stmt.assign());
    const storageData = globalStorage.map(stmt => {
      const defStorage = stmt.assign().defStorage();
      if (!defStorage) {
        throw new Error('Only storage definition is allowed');
      }
      const key = defStorage.storage().ID(0).text;
      const subKey = defStorage.storage().ID(1).text;
      return {
        key,
        subKey,
        value: ExpressionSolver.solve(stmt.assign().expression())
      };
    });

    const main = program.main();
    RootSolver.main = main;
    // The actual executable code is inside main
    const statements = main.statement();

    const mainScope = {};
    storageData.forEach(storage => {
      mainScope[storage.key + '/' + storage.subKey] = storage.value;
    });
    // A copy of the original state
    RootSolver.mainScope = { ...mainScope };

    while (statements.length !== 0) {
      const stmt = statements.shift();
      StatementSolver.solve(stmt, statements, mainScope);
    }
  }
}
