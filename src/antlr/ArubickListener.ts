// Generated from src/antlr/Arubick.g4 by ANTLR 4.6-SNAPSHOT


import { ParseTreeListener } from 'antlr4ts/tree/ParseTreeListener';

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
 * This interface defines a complete listener for a parse tree produced by
 * `ArubickParser`.
 */
export interface ArubickListener extends ParseTreeListener {
	/**
	 * Enter a parse tree produced by `ArubickParser.storage`.
	 * @param ctx the parse tree
	 */
	enterStorage?: (ctx: StorageContext) => void;
	/**
	 * Exit a parse tree produced by `ArubickParser.storage`.
	 * @param ctx the parse tree
	 */
	exitStorage?: (ctx: StorageContext) => void;

	/**
	 * Enter a parse tree produced by `ArubickParser.defStorage`.
	 * @param ctx the parse tree
	 */
	enterDefStorage?: (ctx: DefStorageContext) => void;
	/**
	 * Exit a parse tree produced by `ArubickParser.defStorage`.
	 * @param ctx the parse tree
	 */
	exitDefStorage?: (ctx: DefStorageContext) => void;

	/**
	 * Enter a parse tree produced by `ArubickParser.variable`.
	 * @param ctx the parse tree
	 */
	enterVariable?: (ctx: VariableContext) => void;
	/**
	 * Exit a parse tree produced by `ArubickParser.variable`.
	 * @param ctx the parse tree
	 */
	exitVariable?: (ctx: VariableContext) => void;

	/**
	 * Enter a parse tree produced by `ArubickParser.defVariable`.
	 * @param ctx the parse tree
	 */
	enterDefVariable?: (ctx: DefVariableContext) => void;
	/**
	 * Exit a parse tree produced by `ArubickParser.defVariable`.
	 * @param ctx the parse tree
	 */
	exitDefVariable?: (ctx: DefVariableContext) => void;

	/**
	 * Enter a parse tree produced by `ArubickParser.accessVariable`.
	 * @param ctx the parse tree
	 */
	enterAccessVariable?: (ctx: AccessVariableContext) => void;
	/**
	 * Exit a parse tree produced by `ArubickParser.accessVariable`.
	 * @param ctx the parse tree
	 */
	exitAccessVariable?: (ctx: AccessVariableContext) => void;

	/**
	 * Enter a parse tree produced by `ArubickParser.assign`.
	 * @param ctx the parse tree
	 */
	enterAssign?: (ctx: AssignContext) => void;
	/**
	 * Exit a parse tree produced by `ArubickParser.assign`.
	 * @param ctx the parse tree
	 */
	exitAssign?: (ctx: AssignContext) => void;

	/**
	 * Enter a parse tree produced by `ArubickParser.methodParameters`.
	 * @param ctx the parse tree
	 */
	enterMethodParameters?: (ctx: MethodParametersContext) => void;
	/**
	 * Exit a parse tree produced by `ArubickParser.methodParameters`.
	 * @param ctx the parse tree
	 */
	exitMethodParameters?: (ctx: MethodParametersContext) => void;

	/**
	 * Enter a parse tree produced by `ArubickParser.methodCall`.
	 * @param ctx the parse tree
	 */
	enterMethodCall?: (ctx: MethodCallContext) => void;
	/**
	 * Exit a parse tree produced by `ArubickParser.methodCall`.
	 * @param ctx the parse tree
	 */
	exitMethodCall?: (ctx: MethodCallContext) => void;

	/**
	 * Enter a parse tree produced by `ArubickParser.comparison`.
	 * @param ctx the parse tree
	 */
	enterComparison?: (ctx: ComparisonContext) => void;
	/**
	 * Exit a parse tree produced by `ArubickParser.comparison`.
	 * @param ctx the parse tree
	 */
	exitComparison?: (ctx: ComparisonContext) => void;

	/**
	 * Enter a parse tree produced by `ArubickParser.expression`.
	 * @param ctx the parse tree
	 */
	enterExpression?: (ctx: ExpressionContext) => void;
	/**
	 * Exit a parse tree produced by `ArubickParser.expression`.
	 * @param ctx the parse tree
	 */
	exitExpression?: (ctx: ExpressionContext) => void;

	/**
	 * Enter a parse tree produced by `ArubickParser.array`.
	 * @param ctx the parse tree
	 */
	enterArray?: (ctx: ArrayContext) => void;
	/**
	 * Exit a parse tree produced by `ArubickParser.array`.
	 * @param ctx the parse tree
	 */
	exitArray?: (ctx: ArrayContext) => void;

	/**
	 * Enter a parse tree produced by `ArubickParser.elseStatement`.
	 * @param ctx the parse tree
	 */
	enterElseStatement?: (ctx: ElseStatementContext) => void;
	/**
	 * Exit a parse tree produced by `ArubickParser.elseStatement`.
	 * @param ctx the parse tree
	 */
	exitElseStatement?: (ctx: ElseStatementContext) => void;

	/**
	 * Enter a parse tree produced by `ArubickParser.ifStatement`.
	 * @param ctx the parse tree
	 */
	enterIfStatement?: (ctx: IfStatementContext) => void;
	/**
	 * Exit a parse tree produced by `ArubickParser.ifStatement`.
	 * @param ctx the parse tree
	 */
	exitIfStatement?: (ctx: IfStatementContext) => void;

	/**
	 * Enter a parse tree produced by `ArubickParser.statement`.
	 * @param ctx the parse tree
	 */
	enterStatement?: (ctx: StatementContext) => void;
	/**
	 * Exit a parse tree produced by `ArubickParser.statement`.
	 * @param ctx the parse tree
	 */
	exitStatement?: (ctx: StatementContext) => void;

	/**
	 * Enter a parse tree produced by `ArubickParser.botDefinition`.
	 * @param ctx the parse tree
	 */
	enterBotDefinition?: (ctx: BotDefinitionContext) => void;
	/**
	 * Exit a parse tree produced by `ArubickParser.botDefinition`.
	 * @param ctx the parse tree
	 */
	exitBotDefinition?: (ctx: BotDefinitionContext) => void;

	/**
	 * Enter a parse tree produced by `ArubickParser.main`.
	 * @param ctx the parse tree
	 */
	enterMain?: (ctx: MainContext) => void;
	/**
	 * Exit a parse tree produced by `ArubickParser.main`.
	 * @param ctx the parse tree
	 */
	exitMain?: (ctx: MainContext) => void;

	/**
	 * Enter a parse tree produced by `ArubickParser.program`.
	 * @param ctx the parse tree
	 */
	enterProgram?: (ctx: ProgramContext) => void;
	/**
	 * Exit a parse tree produced by `ArubickParser.program`.
	 * @param ctx the parse tree
	 */
	exitProgram?: (ctx: ProgramContext) => void;
}

