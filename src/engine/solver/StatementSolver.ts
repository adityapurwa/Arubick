import MethodSolver from './MethodSolver';
import ExpressionSolver from './ExpressionSolver';
import { StatementContext } from '../../antlr/ArubickParser';
import Bot from '../Bot';
export default class StatementSolver {
  public static solve(
    stmt: StatementContext,
    context: StatementContext[],
    scope: { [key: string]: any }
  ) {
    const methodCall = stmt.methodCall();
    if (methodCall) {
      return MethodSolver.solve(methodCall, stmt, context, scope);
    }
    const assign = stmt.assign();
    if (assign) {
      const variable = assign.variable();
      const defVariable = assign.defVariable();
      const key = variable
        ? variable.ID().text
        : defVariable.variable().ID().text;
      scope[key] = ExpressionSolver.solve(
        assign.expression(),
        stmt,
        context,
        scope
      );
      return;
    }
    const ifStatement = stmt.ifStatement();
    if (ifStatement) {
      const comparison = ifStatement.comparison();
      if (comparison) {
        // Assume true until proven otherwise
        const ifIsTrue = comparison.reduce((prev, cur) => {
          const variable = cur.variable();
          if (variable) {
            const key = variable.ID().text;
            if (!scope[key]) {
              throw new Error(`Variable ${scope[key]} is not defined`);
            }
            const value = scope[key];

            const storage = cur.storage();
            if (storage) {
              const storageKey = storage.ID(0).text;
              const storageSubKey = storage.ID(1).text;
              const storageData = scope[storageKey + '/' + storageSubKey];
              if (!storageData) {
                throw new Error(
                  `Storage ${storageKey}/${storageSubKey} is not defined`
                );
              }
              const storageValue = storageData;
              // Array
              if (storageValue.length) {
                let match = false;
                for (const storageValueItem of storageValue) {
                  if (new RegExp(storageValueItem).test(value)) {
                    match = true;
                    break;
                  }
                }
                return prev && match;
              }
              // String (method call is not yet supported)
              return prev && new RegExp(storageValue).test(value);
            }
          }
          return true;
        }, true);

        if (ifIsTrue) {
          const ifBody = ifStatement.statement();
          while (ifBody.length !== 0) {
            const body = ifBody.shift();
            StatementSolver.solve(body, ifBody, scope);
          }
        } else {
          const elseStatement = ifStatement.elseStatement();
          if (elseStatement) {
            const ifBody = ifStatement.elseStatement().statement();
            while (ifBody.length !== 0) {
              const body = ifBody.shift();
              StatementSolver.solve(body, ifBody, scope);
            }
          }
        }
      }
    }
  }
}
