// Generated from src/antlr/Arubick.g4 by ANTLR 4.6-SNAPSHOT


import { ParseTreeVisitor } from 'antlr4ts/tree/ParseTreeVisitor';

import { StorageContext } from './ArubickParser';
import { DefStorageContext } from './ArubickParser';
import { VariableContext } from './ArubickParser';
import { DefVariableContext } from './ArubickParser';
import { AccessVariableContext } from './ArubickParser';
import { AssignContext } from './ArubickParser';
import { MethodParametersContext } from './ArubickParser';
import { MethodCallContext } from './ArubickParser';
import { ComparisonContext } from './ArubickParser';
import { ExpressionContext } from './ArubickParser';
import { ArrayContext } from './ArubickParser';
import { ElseStatementContext } from './ArubickParser';
import { IfStatementContext } from './ArubickParser';
import { StatementContext } from './ArubickParser';
import { BotDefinitionContext } from './ArubickParser';
import { MainContext } from './ArubickParser';
import { ProgramContext } from './ArubickParser';


/**
 * This interface defines a complete generic visitor for a parse tree produced
 * by `ArubickParser`.
 *
 * @param <Result> The return type of the visit operation. Use `void` for
 * operations with no return type.
 */
export interface ArubickVisitor<Result> extends ParseTreeVisitor<Result> {
	/**
	 * Visit a parse tree produced by `ArubickParser.storage`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitStorage?: (ctx: StorageContext) => Result;

	/**
	 * Visit a parse tree produced by `ArubickParser.defStorage`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDefStorage?: (ctx: DefStorageContext) => Result;

	/**
	 * Visit a parse tree produced by `ArubickParser.variable`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitVariable?: (ctx: VariableContext) => Result;

	/**
	 * Visit a parse tree produced by `ArubickParser.defVariable`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDefVariable?: (ctx: DefVariableContext) => Result;

	/**
	 * Visit a parse tree produced by `ArubickParser.accessVariable`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAccessVariable?: (ctx: AccessVariableContext) => Result;

	/**
	 * Visit a parse tree produced by `ArubickParser.assign`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAssign?: (ctx: AssignContext) => Result;

	/**
	 * Visit a parse tree produced by `ArubickParser.methodParameters`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitMethodParameters?: (ctx: MethodParametersContext) => Result;

	/**
	 * Visit a parse tree produced by `ArubickParser.methodCall`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitMethodCall?: (ctx: MethodCallContext) => Result;

	/**
	 * Visit a parse tree produced by `ArubickParser.comparison`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitComparison?: (ctx: ComparisonContext) => Result;

	/**
	 * Visit a parse tree produced by `ArubickParser.expression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitExpression?: (ctx: ExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by `ArubickParser.array`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitArray?: (ctx: ArrayContext) => Result;

	/**
	 * Visit a parse tree produced by `ArubickParser.elseStatement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitElseStatement?: (ctx: ElseStatementContext) => Result;

	/**
	 * Visit a parse tree produced by `ArubickParser.ifStatement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitIfStatement?: (ctx: IfStatementContext) => Result;

	/**
	 * Visit a parse tree produced by `ArubickParser.statement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitStatement?: (ctx: StatementContext) => Result;

	/**
	 * Visit a parse tree produced by `ArubickParser.botDefinition`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitBotDefinition?: (ctx: BotDefinitionContext) => Result;

	/**
	 * Visit a parse tree produced by `ArubickParser.main`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitMain?: (ctx: MainContext) => Result;

	/**
	 * Visit a parse tree produced by `ArubickParser.program`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitProgram?: (ctx: ProgramContext) => Result;
}

