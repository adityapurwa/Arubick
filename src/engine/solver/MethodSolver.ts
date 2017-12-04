import { MethodCallContext, StatementContext } from '../../antlr/ArubickParser';
import * as fs from 'fs';
import * as path from 'path';
import * as rl from 'readline';
import ExpressionSolver from './ExpressionSolver';
import RootSolver from './RootSolver';
import StatementSolver from './StatementSolver';

export default class MethodSolver {
  public static solve(
    ctx: MethodCallContext,
    parent?: StatementContext,
    children?: StatementContext[],
    scope?: { [key: string]: any }
  ) {
    const variable = ctx.variable();
    const parameters = ctx.methodParameters();
    const args = parameters
      ? parameters
          .expression()
          .map(exp => ExpressionSolver.solve(exp, parent, children, scope))
      : [];
    // Async method is only available in core methods.
    if (variable) {
      // Async call
      if (ctx.AWAIT()) {
        const copyChildren = children.concat();
        // This is required to prevent the core runner from continuing executing
        children.splice(0, children.length);
        // Evaluate the method call (for now this is just reply())
        if (this.coreMethods.hasOwnProperty(variable.ID().text)) {
          return this.coreMethods[variable.ID().text].apply(this, [
            answer => {
              // Check whether parent statement want to assign the async call result
              if (parent) {
                const assign = parent.assign();
                if (assign) {
                  const assignVar = assign.variable();
                  const asssignDefVariable = assign.defVariable();
                  const key = assignVar
                    ? assignVar.ID().text
                    : asssignDefVariable.variable().ID().text;
                  scope[key] = answer;
                  // Further statement is executed within this scope simulating closure.
                  if (copyChildren) {
                    while (copyChildren.length !== 0) {
                      const stmt = copyChildren.shift();
                      StatementSolver.solve(stmt, copyChildren, scope);
                    }
                  }
                }
              }
            }
          ]);
        }
      } else {
        if (this.coreMethods.hasOwnProperty(variable.ID().text)) {
          return this.coreMethods[variable.ID().text].apply(this, args);
        } else {
          throw new Error(`Undefined method ${variable.ID().text}`);
        }
      }
    } else {
      // Probably an external
      const storage = ctx.storage();
      const storageKey = storage.ID(0);
      const storageSubKey = storage.ID(1);
      if (scope[storageKey + '/' + storageSubKey]) {
        return scope[storageKey + '/' + storageSubKey].apply(this, args);
      } else {
        throw new Error(
          `Undefined external method ${storageKey}/${storageSubKey}`
        );
      }
    }
  }

  private static coreMethods = {
    extern(filename: string) {
      return require(path.resolve(RootSolver.workingDirectory, filename));
    },
    regex(pattern: string) {
      return new RegExp(pattern);
    },
    say(word: string) {
      console.log(word);
    },
    restart() {
      const main = RootSolver.main;
      const mainScope = RootSolver.mainScope;
      const statements = main.statement();
      while (statements.length !== 0) {
        const stmt = statements.shift();
        StatementSolver.solve(stmt, statements, mainScope);
      }
    },
    reply(callback?) {
      const int = rl.createInterface(process.stdin, process.stdout);

      int.question('Enter your reply: ', answer => {
        int.close();
        if (callback) {
          callback(answer);
        }
      });
    }
  };
}
