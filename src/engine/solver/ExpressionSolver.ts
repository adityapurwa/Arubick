import { ExpressionContext, StatementContext } from '../../antlr/ArubickParser';
import MethodSolver from './MethodSolver';

export default class ExpressionSolver {
  public static solve(
    ctx: ExpressionContext,
    stmt?: StatementContext,
    context?: StatementContext[],
    scope?: { [key: string]: any }
  ): any {
    const stringExpr = ctx.STRING();
    const arrayExpr = ctx.array();
    const numberExpr = ctx.NUMBER();
    const methodExpr = ctx.methodCall();
    if (stringExpr) {
      let text = stringExpr.text;
      const stringPlaceholderExpr = /\${([A-Za-z][A-Za-z0-9]*)}/;
      const matches = stringPlaceholderExpr.exec(text);
      // We don't need the first element as it contains the matched full string
      if (matches) {
        matches.shift();
        for (const match of matches) {
          text = text.replace('${' + match + '}', scope[match]);
        }
      }

      return text.substring(1, text.length - 1);
    }
    if (arrayExpr) {
      const array = [];
      for (const exp of arrayExpr.expression()) {
        array.push(this.solve(exp));
      }
      return array;
    }
    if (numberExpr) {
      return parseInt(numberExpr.text, 10);
    }
    if (methodExpr) {
      return MethodSolver.solve(methodExpr, stmt, context, scope);
    }
  }
}
