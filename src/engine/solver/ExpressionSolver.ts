import { ExpressionContext } from '../../antlr/ArubickParser';

export default class ExpressionSolver {
  public solve(ctx: ExpressionContext): any {
    const stringExpr = ctx.STRING();
    const arrayExpr = ctx.array();
    const numberExpr = ctx.NUMBER();
    if (stringExpr) {
      const text = stringExpr.text;
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
  }
}
