import * as fs from 'fs';
import { ANTLRInputStream, CommonTokenStream } from 'antlr4ts';
import { ArubickLexer } from '../antlr/ArubickLexer';
import { ArubickParser } from '../antlr/ArubickParser';
import BotVisitor from './visitor/BotVisitor';

export default class Bot {
  private source: string;

  public load(filename: string): Promise<void> {
    return new Promise((resolve, reject) => {
      fs.readFile(filename, 'utf8', (err, data) => {
        if (err) {
          reject(err);
        } else {
          this.source = data;
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

    const visitor = new BotVisitor();
  }
}
