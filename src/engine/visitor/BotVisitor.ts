import { ArubickVisitor } from '../../antlr/ArubickVisitor';
import { RuleNode } from 'antlr4ts/tree/RuleNode';
import { TerminalNode } from 'antlr4ts/tree/TerminalNode';
import { ErrorNode } from 'antlr4ts/tree/ErrorNode';
import {
  StorageContext,
  DefStorageContext,
  VariableContext,
  DefVariableContext,
  AccessVariableContext,
  AssignContext,
  MethodParametersContext,
  MethodCallContext,
  ComparisonContext,
  ExpressionContext,
  ArrayContext,
  ElseStatementContext,
  IfStatementContext,
  StatementContext,
  BotDefinitionContext,
  MainContext,
  ProgramContext
} from '../../antlr/ArubickParser';
import { ParseTree } from 'antlr4ts/tree/ParseTree';
import { AbstractParseTreeVisitor } from 'antlr4ts/tree';

interface IMetadata {
  name: string;
  version: string;
}

export default class BotVisitor extends AbstractParseTreeVisitor<any>
  implements ArubickVisitor<any> {
  public visitBotDefinition(ctx: BotDefinitionContext): IMetadata {
    return {
      name: ctx.ID().text,
      version: ctx.NUMBER().join('.')
    };
  }

  public visitDefStorage(ctx: DefStorageContext) {
    return '';
  }

  protected defaultResult() {
    return '';
  }
}
