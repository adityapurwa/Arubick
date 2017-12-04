import { MainContext } from '../../antlr/ArubickParser';
export default class RootSolver {
  public static workingDirectory: string;
  public static main: MainContext;
  public static mainScope: { [key: string]: any };
}
