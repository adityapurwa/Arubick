// Generated from src/antlr/Arubick.g4 by ANTLR 4.6-SNAPSHOT


import { ATN } from 'antlr4ts/atn/ATN';
import { ATNDeserializer } from 'antlr4ts/atn/ATNDeserializer';
import { FailedPredicateException } from 'antlr4ts/FailedPredicateException';
import { NotNull } from 'antlr4ts/Decorators';
import { NoViableAltException } from 'antlr4ts/NoViableAltException';
import { Override } from 'antlr4ts/Decorators';
import { Parser } from 'antlr4ts/Parser';
import { ParserRuleContext } from 'antlr4ts/ParserRuleContext';
import { ParserATNSimulator } from 'antlr4ts/atn/ParserATNSimulator';
import { ParseTreeListener } from 'antlr4ts/tree/ParseTreeListener';
import { ParseTreeVisitor } from 'antlr4ts/tree/ParseTreeVisitor';
import { RecognitionException } from 'antlr4ts/RecognitionException';
import { RuleContext } from 'antlr4ts/RuleContext';
import { RuleVersion } from 'antlr4ts/RuleVersion';
import { TerminalNode } from 'antlr4ts/tree/TerminalNode';
import { Token } from 'antlr4ts/Token';
import { TokenStream } from 'antlr4ts/TokenStream';
import { Vocabulary } from 'antlr4ts/Vocabulary';
import { VocabularyImpl } from 'antlr4ts/VocabularyImpl';

import * as Utils from 'antlr4ts/misc/Utils';

import { ArubickListener } from './ArubickListener';
import { ArubickVisitor } from './ArubickVisitor';


export class ArubickParser extends Parser {
	public static readonly T__0=1;
	public static readonly T__1=2;
	public static readonly T__2=3;
	public static readonly T__3=4;
	public static readonly T__4=5;
	public static readonly WS=6;
	public static readonly EOL=7;
	public static readonly DEF=8;
	public static readonly IF=9;
	public static readonly ELSE=10;
	public static readonly IS=11;
	public static readonly AWAIT=12;
	public static readonly AND=13;
	public static readonly OR=14;
	public static readonly LBRACKET=15;
	public static readonly RBRACKET=16;
	public static readonly LPARENT=17;
	public static readonly RPARENT=18;
	public static readonly LSCOPE=19;
	public static readonly RSCOPE=20;
	public static readonly ASSIGN=21;
	public static readonly STRING=22;
	public static readonly NUMBER=23;
	public static readonly ID=24;
	public static readonly RULE_storage = 0;
	public static readonly RULE_defStorage = 1;
	public static readonly RULE_variable = 2;
	public static readonly RULE_defVariable = 3;
	public static readonly RULE_accessVariable = 4;
	public static readonly RULE_assign = 5;
	public static readonly RULE_methodParameters = 6;
	public static readonly RULE_methodCall = 7;
	public static readonly RULE_comparison = 8;
	public static readonly RULE_expression = 9;
	public static readonly RULE_array = 10;
	public static readonly RULE_elseStatement = 11;
	public static readonly RULE_ifStatement = 12;
	public static readonly RULE_statement = 13;
	public static readonly RULE_botDefinition = 14;
	public static readonly RULE_main = 15;
	public static readonly RULE_program = 16;
	public static readonly ruleNames: string[] = [
		"storage", "defStorage", "variable", "defVariable", "accessVariable", 
		"assign", "methodParameters", "methodCall", "comparison", "expression", 
		"array", "elseStatement", "ifStatement", "statement", "botDefinition", 
		"main", "program"
	];

	private static readonly _LITERAL_NAMES: (string | undefined)[] = [
		undefined, "'/'", "'.'", "','", "':'", "'main'", undefined, undefined, 
		"'def'", "'if'", "'else'", "'is'", "'await'", "'and'", "'or'", "'['", 
		"']'", "'('", "')'", "'{'", "'}'", "'='"
	];
	private static readonly _SYMBOLIC_NAMES: (string | undefined)[] = [
		undefined, undefined, undefined, undefined, undefined, undefined, "WS", 
		"EOL", "DEF", "IF", "ELSE", "IS", "AWAIT", "AND", "OR", "LBRACKET", "RBRACKET", 
		"LPARENT", "RPARENT", "LSCOPE", "RSCOPE", "ASSIGN", "STRING", "NUMBER", 
		"ID"
	];
	public static readonly VOCABULARY: Vocabulary = new VocabularyImpl(ArubickParser._LITERAL_NAMES, ArubickParser._SYMBOLIC_NAMES, []);

	@Override
	@NotNull
	public get vocabulary(): Vocabulary {
		return ArubickParser.VOCABULARY;
	}

	@Override
	public get grammarFileName(): string { return "Arubick.g4"; }

	@Override
	public get ruleNames(): string[] { return ArubickParser.ruleNames; }

	@Override
	public get serializedATN(): string { return ArubickParser._serializedATN; }

	constructor(input: TokenStream) {
		super(input);
		this._interp = new ParserATNSimulator(ArubickParser._ATN, this);
	}
	@RuleVersion(0)
	public storage(): StorageContext {
		let _localctx: StorageContext = new StorageContext(this._ctx, this.state);
		this.enterRule(_localctx, 0, ArubickParser.RULE_storage);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 34;
			this.match(ArubickParser.ID);
			this.state = 35;
			this.match(ArubickParser.T__0);
			this.state = 36;
			this.match(ArubickParser.ID);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public defStorage(): DefStorageContext {
		let _localctx: DefStorageContext = new DefStorageContext(this._ctx, this.state);
		this.enterRule(_localctx, 2, ArubickParser.RULE_defStorage);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 38;
			this.match(ArubickParser.DEF);
			this.state = 39;
			this.storage();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public variable(): VariableContext {
		let _localctx: VariableContext = new VariableContext(this._ctx, this.state);
		this.enterRule(_localctx, 4, ArubickParser.RULE_variable);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 41;
			this.match(ArubickParser.ID);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public defVariable(): DefVariableContext {
		let _localctx: DefVariableContext = new DefVariableContext(this._ctx, this.state);
		this.enterRule(_localctx, 6, ArubickParser.RULE_defVariable);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 43;
			this.match(ArubickParser.DEF);
			this.state = 44;
			this.variable();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public accessVariable(): AccessVariableContext {
		let _localctx: AccessVariableContext = new AccessVariableContext(this._ctx, this.state);
		this.enterRule(_localctx, 8, ArubickParser.RULE_accessVariable);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 46;
			this.variable();
			this.state = 49; 
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			do {
				{
				{
				this.state = 47;
				this.match(ArubickParser.T__1);
				this.state = 48;
				this.variable();
				}
				}
				this.state = 51; 
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			} while ( _la===ArubickParser.T__1 );
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public assign(): AssignContext {
		let _localctx: AssignContext = new AssignContext(this._ctx, this.state);
		this.enterRule(_localctx, 10, ArubickParser.RULE_assign);
		try {
			this.state = 69;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input,1,this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 53;
				this.storage();
				this.state = 54;
				this.match(ArubickParser.ASSIGN);
				this.state = 55;
				this.expression();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 57;
				this.defStorage();
				this.state = 58;
				this.match(ArubickParser.ASSIGN);
				this.state = 59;
				this.expression();
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 61;
				this.variable();
				this.state = 62;
				this.match(ArubickParser.ASSIGN);
				this.state = 63;
				this.expression();
				}
				break;

			case 4:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 65;
				this.defVariable();
				this.state = 66;
				this.match(ArubickParser.ASSIGN);
				this.state = 67;
				this.expression();
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public methodParameters(): MethodParametersContext {
		let _localctx: MethodParametersContext = new MethodParametersContext(this._ctx, this.state);
		this.enterRule(_localctx, 12, ArubickParser.RULE_methodParameters);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 71;
			this.expression();
			this.state = 76;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la===ArubickParser.T__2) {
				{
				{
				this.state = 72;
				this.match(ArubickParser.T__2);
				this.state = 73;
				this.expression();
				}
				}
				this.state = 78;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public methodCall(): MethodCallContext {
		let _localctx: MethodCallContext = new MethodCallContext(this._ctx, this.state);
		this.enterRule(_localctx, 14, ArubickParser.RULE_methodCall);
		let _la: number;
		try {
			this.state = 99;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input,7,this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 80;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===ArubickParser.AWAIT) {
					{
					this.state = 79;
					this.match(ArubickParser.AWAIT);
					}
				}

				this.state = 82;
				this.storage();
				this.state = 83;
				this.match(ArubickParser.LPARENT);
				this.state = 85;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << ArubickParser.AWAIT) | (1 << ArubickParser.LBRACKET) | (1 << ArubickParser.STRING) | (1 << ArubickParser.NUMBER) | (1 << ArubickParser.ID))) !== 0)) {
					{
					this.state = 84;
					this.methodParameters();
					}
				}

				this.state = 87;
				this.match(ArubickParser.RPARENT);
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 90;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===ArubickParser.AWAIT) {
					{
					this.state = 89;
					this.match(ArubickParser.AWAIT);
					}
				}

				this.state = 92;
				this.variable();
				this.state = 93;
				this.match(ArubickParser.LPARENT);
				this.state = 95;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << ArubickParser.AWAIT) | (1 << ArubickParser.LBRACKET) | (1 << ArubickParser.STRING) | (1 << ArubickParser.NUMBER) | (1 << ArubickParser.ID))) !== 0)) {
					{
					this.state = 94;
					this.methodParameters();
					}
				}

				this.state = 97;
				this.match(ArubickParser.RPARENT);
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public comparison(): ComparisonContext {
		let _localctx: ComparisonContext = new ComparisonContext(this._ctx, this.state);
		this.enterRule(_localctx, 16, ArubickParser.RULE_comparison);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 101;
			this.variable();
			this.state = 102;
			this.match(ArubickParser.IS);
			this.state = 105;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input,8,this._ctx) ) {
			case 1:
				{
				this.state = 103;
				this.expression();
				}
				break;

			case 2:
				{
				this.state = 104;
				this.storage();
				}
				break;
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public expression(): ExpressionContext {
		let _localctx: ExpressionContext = new ExpressionContext(this._ctx, this.state);
		this.enterRule(_localctx, 18, ArubickParser.RULE_expression);
		try {
			this.state = 113;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input,9,this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 107;
				this.match(ArubickParser.STRING);
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 108;
				this.match(ArubickParser.NUMBER);
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 109;
				this.variable();
				}
				break;

			case 4:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 110;
				this.accessVariable();
				}
				break;

			case 5:
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 111;
				this.methodCall();
				}
				break;

			case 6:
				this.enterOuterAlt(_localctx, 6);
				{
				this.state = 112;
				this.array();
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public array(): ArrayContext {
		let _localctx: ArrayContext = new ArrayContext(this._ctx, this.state);
		this.enterRule(_localctx, 20, ArubickParser.RULE_array);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 115;
			this.match(ArubickParser.LBRACKET);
			this.state = 116;
			this.expression();
			this.state = 121;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la===ArubickParser.T__2) {
				{
				{
				this.state = 117;
				this.match(ArubickParser.T__2);
				this.state = 118;
				this.expression();
				}
				}
				this.state = 123;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 124;
			this.match(ArubickParser.RBRACKET);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public elseStatement(): ElseStatementContext {
		let _localctx: ElseStatementContext = new ElseStatementContext(this._ctx, this.state);
		this.enterRule(_localctx, 22, ArubickParser.RULE_elseStatement);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 126;
			this.match(ArubickParser.ELSE);
			this.state = 127;
			this.match(ArubickParser.LSCOPE);
			this.state = 131;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << ArubickParser.DEF) | (1 << ArubickParser.IF) | (1 << ArubickParser.AWAIT) | (1 << ArubickParser.ID))) !== 0)) {
				{
				{
				this.state = 128;
				this.statement();
				}
				}
				this.state = 133;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 134;
			this.match(ArubickParser.RSCOPE);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public ifStatement(): IfStatementContext {
		let _localctx: IfStatementContext = new IfStatementContext(this._ctx, this.state);
		this.enterRule(_localctx, 24, ArubickParser.RULE_ifStatement);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 136;
			this.match(ArubickParser.IF);
			this.state = 137;
			this.comparison();
			this.state = 142;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la===ArubickParser.AND || _la===ArubickParser.OR) {
				{
				{
				this.state = 138;
				_la = this._input.LA(1);
				if ( !(_la===ArubickParser.AND || _la===ArubickParser.OR) ) {
				this._errHandler.recoverInline(this);
				} else {
					if (this._input.LA(1) === Token.EOF) {
						this.matchedEOF = true;
					}

					this._errHandler.reportMatch(this);
					this.consume();
				}
				this.state = 139;
				this.comparison();
				}
				}
				this.state = 144;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 145;
			this.match(ArubickParser.LSCOPE);
			this.state = 149;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << ArubickParser.DEF) | (1 << ArubickParser.IF) | (1 << ArubickParser.AWAIT) | (1 << ArubickParser.ID))) !== 0)) {
				{
				{
				this.state = 146;
				this.statement();
				}
				}
				this.state = 151;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 152;
			this.match(ArubickParser.RSCOPE);
			this.state = 154;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===ArubickParser.ELSE) {
				{
				this.state = 153;
				this.elseStatement();
				}
			}

			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public statement(): StatementContext {
		let _localctx: StatementContext = new StatementContext(this._ctx, this.state);
		this.enterRule(_localctx, 26, ArubickParser.RULE_statement);
		try {
			this.state = 159;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input,15,this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 156;
				this.assign();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 157;
				this.methodCall();
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 158;
				this.ifStatement();
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public botDefinition(): BotDefinitionContext {
		let _localctx: BotDefinitionContext = new BotDefinitionContext(this._ctx, this.state);
		this.enterRule(_localctx, 28, ArubickParser.RULE_botDefinition);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 161;
			this.match(ArubickParser.ID);
			this.state = 162;
			this.match(ArubickParser.T__3);
			this.state = 163;
			this.match(ArubickParser.NUMBER);
			this.state = 168;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la===ArubickParser.T__1) {
				{
				{
				this.state = 164;
				this.match(ArubickParser.T__1);
				this.state = 165;
				this.match(ArubickParser.NUMBER);
				}
				}
				this.state = 170;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public main(): MainContext {
		let _localctx: MainContext = new MainContext(this._ctx, this.state);
		this.enterRule(_localctx, 30, ArubickParser.RULE_main);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 171;
			this.match(ArubickParser.T__4);
			this.state = 172;
			this.match(ArubickParser.LSCOPE);
			this.state = 176;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << ArubickParser.DEF) | (1 << ArubickParser.IF) | (1 << ArubickParser.AWAIT) | (1 << ArubickParser.ID))) !== 0)) {
				{
				{
				this.state = 173;
				this.statement();
				}
				}
				this.state = 178;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 179;
			this.match(ArubickParser.RSCOPE);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public program(): ProgramContext {
		let _localctx: ProgramContext = new ProgramContext(this._ctx, this.state);
		this.enterRule(_localctx, 32, ArubickParser.RULE_program);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 181;
			this.botDefinition();
			this.state = 185;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << ArubickParser.DEF) | (1 << ArubickParser.IF) | (1 << ArubickParser.AWAIT) | (1 << ArubickParser.ID))) !== 0)) {
				{
				{
				this.state = 182;
				this.statement();
				}
				}
				this.state = 187;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 188;
			this.main();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}

	public static readonly _serializedATN: string =
		"\x03\uAF6F\u8320\u479D\uB75C\u4880\u1605\u191C\uAB37\x03\x1A\xC1\x04\x02"+
		"\t\x02\x04\x03\t\x03\x04\x04\t\x04\x04\x05\t\x05\x04\x06\t\x06\x04\x07"+
		"\t\x07\x04\b\t\b\x04\t\t\t\x04\n\t\n\x04\v\t\v\x04\f\t\f\x04\r\t\r\x04"+
		"\x0E\t\x0E\x04\x0F\t\x0F\x04\x10\t\x10\x04\x11\t\x11\x04\x12\t\x12\x03"+
		"\x02\x03\x02\x03\x02\x03\x02\x03\x03\x03\x03\x03\x03\x03\x04\x03\x04\x03"+
		"\x05\x03\x05\x03\x05\x03\x06\x03\x06\x03\x06\x06\x064\n\x06\r\x06\x0E"+
		"\x065\x03\x07\x03\x07\x03\x07\x03\x07\x03\x07\x03\x07\x03\x07\x03\x07"+
		"\x03\x07\x03\x07\x03\x07\x03\x07\x03\x07\x03\x07\x03\x07\x03\x07\x05\x07"+
		"H\n\x07\x03\b\x03\b\x03\b\x07\bM\n\b\f\b\x0E\bP\v\b\x03\t\x05\tS\n\t\x03"+
		"\t\x03\t\x03\t\x05\tX\n\t\x03\t\x03\t\x03\t\x05\t]\n\t\x03\t\x03\t\x03"+
		"\t\x05\tb\n\t\x03\t\x03\t\x05\tf\n\t\x03\n\x03\n\x03\n\x03\n\x05\nl\n"+
		"\n\x03\v\x03\v\x03\v\x03\v\x03\v\x03\v\x05\vt\n\v\x03\f\x03\f\x03\f\x03"+
		"\f\x07\fz\n\f\f\f\x0E\f}\v\f\x03\f\x03\f\x03\r\x03\r\x03\r\x07\r\x84\n"+
		"\r\f\r\x0E\r\x87\v\r\x03\r\x03\r\x03\x0E\x03\x0E\x03\x0E\x03\x0E\x07\x0E"+
		"\x8F\n\x0E\f\x0E\x0E\x0E\x92\v\x0E\x03\x0E\x03\x0E\x07\x0E\x96\n\x0E\f"+
		"\x0E\x0E\x0E\x99\v\x0E\x03\x0E\x03\x0E\x05\x0E\x9D\n\x0E\x03\x0F\x03\x0F"+
		"\x03\x0F\x05\x0F\xA2\n\x0F\x03\x10\x03\x10\x03\x10\x03\x10\x03\x10\x07"+
		"\x10\xA9\n\x10\f\x10\x0E\x10\xAC\v\x10\x03\x11\x03\x11\x03\x11\x07\x11"+
		"\xB1\n\x11\f\x11\x0E\x11\xB4\v\x11\x03\x11\x03\x11\x03\x12\x03\x12\x07"+
		"\x12\xBA\n\x12\f\x12\x0E\x12\xBD\v\x12\x03\x12\x03\x12\x03\x12\x02\x02"+
		"\x02\x13\x02\x02\x04\x02\x06\x02\b\x02\n\x02\f\x02\x0E\x02\x10\x02\x12"+
		"\x02\x14\x02\x16\x02\x18\x02\x1A\x02\x1C\x02\x1E\x02 \x02\"\x02\x02\x03"+
		"\x03\x02\x0F\x10\xC9\x02$\x03\x02\x02\x02\x04(\x03\x02\x02\x02\x06+\x03"+
		"\x02\x02\x02\b-\x03\x02\x02\x02\n0\x03\x02\x02\x02\fG\x03\x02\x02\x02"+
		"\x0EI\x03\x02\x02\x02\x10e\x03\x02\x02\x02\x12g\x03\x02\x02\x02\x14s\x03"+
		"\x02\x02\x02\x16u\x03\x02\x02\x02\x18\x80\x03\x02\x02\x02\x1A\x8A\x03"+
		"\x02\x02\x02\x1C\xA1\x03\x02\x02\x02\x1E\xA3\x03\x02\x02\x02 \xAD\x03"+
		"\x02\x02\x02\"\xB7\x03\x02\x02\x02$%\x07\x1A\x02\x02%&\x07\x03\x02\x02"+
		"&\'\x07\x1A\x02\x02\'\x03\x03\x02\x02\x02()\x07\n\x02\x02)*\x05\x02\x02"+
		"\x02*\x05\x03\x02\x02\x02+,\x07\x1A\x02\x02,\x07\x03\x02\x02\x02-.\x07"+
		"\n\x02\x02./\x05\x06\x04\x02/\t\x03\x02\x02\x0203\x05\x06\x04\x0212\x07"+
		"\x04\x02\x0224\x05\x06\x04\x0231\x03\x02\x02\x0245\x03\x02\x02\x0253\x03"+
		"\x02\x02\x0256\x03\x02\x02\x026\v\x03\x02\x02\x0278\x05\x02\x02\x0289"+
		"\x07\x17\x02\x029:\x05\x14\v\x02:H\x03\x02\x02\x02;<\x05\x04\x03\x02<"+
		"=\x07\x17\x02\x02=>\x05\x14\v\x02>H\x03\x02\x02\x02?@\x05\x06\x04\x02"+
		"@A\x07\x17\x02\x02AB\x05\x14\v\x02BH\x03\x02\x02\x02CD\x05\b\x05\x02D"+
		"E\x07\x17\x02\x02EF\x05\x14\v\x02FH\x03\x02\x02\x02G7\x03\x02\x02\x02"+
		"G;\x03\x02\x02\x02G?\x03\x02\x02\x02GC\x03\x02\x02\x02H\r\x03\x02\x02"+
		"\x02IN\x05\x14\v\x02JK\x07\x05\x02\x02KM\x05\x14\v\x02LJ\x03\x02\x02\x02"+
		"MP\x03\x02\x02\x02NL\x03\x02\x02\x02NO\x03\x02\x02\x02O\x0F\x03\x02\x02"+
		"\x02PN\x03\x02\x02\x02QS\x07\x0E\x02\x02RQ\x03\x02\x02\x02RS\x03\x02\x02"+
		"\x02ST\x03\x02\x02\x02TU\x05\x02\x02\x02UW\x07\x13\x02\x02VX\x05\x0E\b"+
		"\x02WV\x03\x02\x02\x02WX\x03\x02\x02\x02XY\x03\x02\x02\x02YZ\x07\x14\x02"+
		"\x02Zf\x03\x02\x02\x02[]\x07\x0E\x02\x02\\[\x03\x02\x02\x02\\]\x03\x02"+
		"\x02\x02]^\x03\x02\x02\x02^_\x05\x06\x04\x02_a\x07\x13\x02\x02`b\x05\x0E"+
		"\b\x02a`\x03\x02\x02\x02ab\x03\x02\x02\x02bc\x03\x02\x02\x02cd\x07\x14"+
		"\x02\x02df\x03\x02\x02\x02eR\x03\x02\x02\x02e\\\x03\x02\x02\x02f\x11\x03"+
		"\x02\x02\x02gh\x05\x06\x04\x02hk\x07\r\x02\x02il\x05\x14\v\x02jl\x05\x02"+
		"\x02\x02ki\x03\x02\x02\x02kj\x03\x02\x02\x02l\x13\x03\x02\x02\x02mt\x07"+
		"\x18\x02\x02nt\x07\x19\x02\x02ot\x05\x06\x04\x02pt\x05\n\x06\x02qt\x05"+
		"\x10\t\x02rt\x05\x16\f\x02sm\x03\x02\x02\x02sn\x03\x02\x02\x02so\x03\x02"+
		"\x02\x02sp\x03\x02\x02\x02sq\x03\x02\x02\x02sr\x03\x02\x02\x02t\x15\x03"+
		"\x02\x02\x02uv\x07\x11\x02\x02v{\x05\x14\v\x02wx\x07\x05\x02\x02xz\x05"+
		"\x14\v\x02yw\x03\x02\x02\x02z}\x03\x02\x02\x02{y\x03\x02\x02\x02{|\x03"+
		"\x02\x02\x02|~\x03\x02\x02\x02}{\x03\x02\x02\x02~\x7F\x07\x12\x02\x02"+
		"\x7F\x17\x03\x02\x02\x02\x80\x81\x07\f\x02\x02\x81\x85\x07\x15\x02\x02"+
		"\x82\x84\x05\x1C\x0F\x02\x83\x82\x03\x02\x02\x02\x84\x87\x03\x02\x02\x02"+
		"\x85\x83\x03\x02\x02\x02\x85\x86\x03\x02\x02\x02\x86\x88\x03\x02\x02\x02"+
		"\x87\x85\x03\x02\x02\x02\x88\x89\x07\x16\x02\x02\x89\x19\x03\x02\x02\x02"+
		"\x8A\x8B\x07\v\x02\x02\x8B\x90\x05\x12\n\x02\x8C\x8D\t\x02\x02\x02\x8D"+
		"\x8F\x05\x12\n\x02\x8E\x8C\x03\x02\x02\x02\x8F\x92\x03\x02\x02\x02\x90"+
		"\x8E\x03\x02\x02\x02\x90\x91\x03\x02\x02\x02\x91\x93\x03\x02\x02\x02\x92"+
		"\x90\x03\x02\x02\x02\x93\x97\x07\x15\x02\x02\x94\x96\x05\x1C\x0F\x02\x95"+
		"\x94\x03\x02\x02\x02\x96\x99\x03\x02\x02\x02\x97\x95\x03\x02\x02\x02\x97"+
		"\x98\x03\x02\x02\x02\x98\x9A\x03\x02\x02\x02\x99\x97\x03\x02\x02\x02\x9A"+
		"\x9C\x07\x16\x02\x02\x9B\x9D\x05\x18\r\x02\x9C\x9B\x03\x02\x02\x02\x9C"+
		"\x9D\x03\x02\x02\x02\x9D\x1B\x03\x02\x02\x02\x9E\xA2\x05\f\x07\x02\x9F"+
		"\xA2\x05\x10\t\x02\xA0\xA2\x05\x1A\x0E\x02\xA1\x9E\x03\x02\x02\x02\xA1"+
		"\x9F\x03\x02\x02\x02\xA1\xA0\x03\x02\x02\x02\xA2\x1D\x03\x02\x02\x02\xA3"+
		"\xA4\x07\x1A\x02\x02\xA4\xA5\x07\x06\x02\x02\xA5\xAA\x07\x19\x02\x02\xA6"+
		"\xA7\x07\x04\x02\x02\xA7\xA9\x07\x19\x02\x02\xA8\xA6\x03\x02\x02\x02\xA9"+
		"\xAC\x03\x02\x02\x02\xAA\xA8\x03\x02\x02\x02\xAA\xAB\x03\x02\x02\x02\xAB"+
		"\x1F\x03\x02\x02\x02\xAC\xAA\x03\x02\x02\x02\xAD\xAE\x07\x07\x02\x02\xAE"+
		"\xB2\x07\x15\x02\x02\xAF\xB1\x05\x1C\x0F\x02\xB0\xAF\x03\x02\x02\x02\xB1"+
		"\xB4\x03\x02\x02\x02\xB2\xB0\x03\x02\x02\x02\xB2\xB3\x03\x02\x02\x02\xB3"+
		"\xB5\x03\x02\x02\x02\xB4\xB2\x03\x02\x02\x02\xB5\xB6\x07\x16\x02\x02\xB6"+
		"!\x03\x02\x02\x02\xB7\xBB\x05\x1E\x10\x02\xB8\xBA\x05\x1C\x0F\x02\xB9"+
		"\xB8\x03\x02\x02\x02\xBA\xBD\x03\x02\x02\x02\xBB\xB9\x03\x02\x02\x02\xBB"+
		"\xBC\x03\x02\x02\x02\xBC\xBE\x03\x02\x02\x02\xBD\xBB\x03\x02\x02\x02\xBE"+
		"\xBF\x05 \x11\x02\xBF#\x03\x02\x02\x02\x155GNRW\\aeks{\x85\x90\x97\x9C"+
		"\xA1\xAA\xB2\xBB";
	public static __ATN: ATN;
	public static get _ATN(): ATN {
		if (!ArubickParser.__ATN) {
			ArubickParser.__ATN = new ATNDeserializer().deserialize(Utils.toCharArray(ArubickParser._serializedATN));
		}

		return ArubickParser.__ATN;
	}

}

export class StorageContext extends ParserRuleContext {
	public ID(): TerminalNode[];
	public ID(i: number): TerminalNode;
	public ID(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(ArubickParser.ID);
		} else {
			return this.getToken(ArubickParser.ID, i);
		}
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return ArubickParser.RULE_storage; }
	@Override
	public enterRule(listener: ArubickListener): void {
		if (listener.enterStorage) listener.enterStorage(this);
	}
	@Override
	public exitRule(listener: ArubickListener): void {
		if (listener.exitStorage) listener.exitStorage(this);
	}
	@Override
	public accept<Result>(visitor: ArubickVisitor<Result>): Result {
		if (visitor.visitStorage) return visitor.visitStorage(this);
		else return visitor.visitChildren(this);
	}
}


export class DefStorageContext extends ParserRuleContext {
	public DEF(): TerminalNode { return this.getToken(ArubickParser.DEF, 0); }
	public storage(): StorageContext {
		return this.getRuleContext(0, StorageContext);
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return ArubickParser.RULE_defStorage; }
	@Override
	public enterRule(listener: ArubickListener): void {
		if (listener.enterDefStorage) listener.enterDefStorage(this);
	}
	@Override
	public exitRule(listener: ArubickListener): void {
		if (listener.exitDefStorage) listener.exitDefStorage(this);
	}
	@Override
	public accept<Result>(visitor: ArubickVisitor<Result>): Result {
		if (visitor.visitDefStorage) return visitor.visitDefStorage(this);
		else return visitor.visitChildren(this);
	}
}


export class VariableContext extends ParserRuleContext {
	public ID(): TerminalNode { return this.getToken(ArubickParser.ID, 0); }
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return ArubickParser.RULE_variable; }
	@Override
	public enterRule(listener: ArubickListener): void {
		if (listener.enterVariable) listener.enterVariable(this);
	}
	@Override
	public exitRule(listener: ArubickListener): void {
		if (listener.exitVariable) listener.exitVariable(this);
	}
	@Override
	public accept<Result>(visitor: ArubickVisitor<Result>): Result {
		if (visitor.visitVariable) return visitor.visitVariable(this);
		else return visitor.visitChildren(this);
	}
}


export class DefVariableContext extends ParserRuleContext {
	public DEF(): TerminalNode { return this.getToken(ArubickParser.DEF, 0); }
	public variable(): VariableContext {
		return this.getRuleContext(0, VariableContext);
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return ArubickParser.RULE_defVariable; }
	@Override
	public enterRule(listener: ArubickListener): void {
		if (listener.enterDefVariable) listener.enterDefVariable(this);
	}
	@Override
	public exitRule(listener: ArubickListener): void {
		if (listener.exitDefVariable) listener.exitDefVariable(this);
	}
	@Override
	public accept<Result>(visitor: ArubickVisitor<Result>): Result {
		if (visitor.visitDefVariable) return visitor.visitDefVariable(this);
		else return visitor.visitChildren(this);
	}
}


export class AccessVariableContext extends ParserRuleContext {
	public variable(): VariableContext[];
	public variable(i: number): VariableContext;
	public variable(i?: number): VariableContext | VariableContext[] {
		if (i === undefined) {
			return this.getRuleContexts(VariableContext);
		} else {
			return this.getRuleContext(i, VariableContext);
		}
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return ArubickParser.RULE_accessVariable; }
	@Override
	public enterRule(listener: ArubickListener): void {
		if (listener.enterAccessVariable) listener.enterAccessVariable(this);
	}
	@Override
	public exitRule(listener: ArubickListener): void {
		if (listener.exitAccessVariable) listener.exitAccessVariable(this);
	}
	@Override
	public accept<Result>(visitor: ArubickVisitor<Result>): Result {
		if (visitor.visitAccessVariable) return visitor.visitAccessVariable(this);
		else return visitor.visitChildren(this);
	}
}


export class AssignContext extends ParserRuleContext {
	public storage(): StorageContext | undefined {
		return this.tryGetRuleContext(0, StorageContext);
	}
	public ASSIGN(): TerminalNode { return this.getToken(ArubickParser.ASSIGN, 0); }
	public expression(): ExpressionContext {
		return this.getRuleContext(0, ExpressionContext);
	}
	public defStorage(): DefStorageContext | undefined {
		return this.tryGetRuleContext(0, DefStorageContext);
	}
	public variable(): VariableContext | undefined {
		return this.tryGetRuleContext(0, VariableContext);
	}
	public defVariable(): DefVariableContext | undefined {
		return this.tryGetRuleContext(0, DefVariableContext);
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return ArubickParser.RULE_assign; }
	@Override
	public enterRule(listener: ArubickListener): void {
		if (listener.enterAssign) listener.enterAssign(this);
	}
	@Override
	public exitRule(listener: ArubickListener): void {
		if (listener.exitAssign) listener.exitAssign(this);
	}
	@Override
	public accept<Result>(visitor: ArubickVisitor<Result>): Result {
		if (visitor.visitAssign) return visitor.visitAssign(this);
		else return visitor.visitChildren(this);
	}
}


export class MethodParametersContext extends ParserRuleContext {
	public expression(): ExpressionContext[];
	public expression(i: number): ExpressionContext;
	public expression(i?: number): ExpressionContext | ExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExpressionContext);
		} else {
			return this.getRuleContext(i, ExpressionContext);
		}
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return ArubickParser.RULE_methodParameters; }
	@Override
	public enterRule(listener: ArubickListener): void {
		if (listener.enterMethodParameters) listener.enterMethodParameters(this);
	}
	@Override
	public exitRule(listener: ArubickListener): void {
		if (listener.exitMethodParameters) listener.exitMethodParameters(this);
	}
	@Override
	public accept<Result>(visitor: ArubickVisitor<Result>): Result {
		if (visitor.visitMethodParameters) return visitor.visitMethodParameters(this);
		else return visitor.visitChildren(this);
	}
}


export class MethodCallContext extends ParserRuleContext {
	public storage(): StorageContext | undefined {
		return this.tryGetRuleContext(0, StorageContext);
	}
	public LPARENT(): TerminalNode { return this.getToken(ArubickParser.LPARENT, 0); }
	public RPARENT(): TerminalNode { return this.getToken(ArubickParser.RPARENT, 0); }
	public AWAIT(): TerminalNode | undefined { return this.tryGetToken(ArubickParser.AWAIT, 0); }
	public methodParameters(): MethodParametersContext | undefined {
		return this.tryGetRuleContext(0, MethodParametersContext);
	}
	public variable(): VariableContext | undefined {
		return this.tryGetRuleContext(0, VariableContext);
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return ArubickParser.RULE_methodCall; }
	@Override
	public enterRule(listener: ArubickListener): void {
		if (listener.enterMethodCall) listener.enterMethodCall(this);
	}
	@Override
	public exitRule(listener: ArubickListener): void {
		if (listener.exitMethodCall) listener.exitMethodCall(this);
	}
	@Override
	public accept<Result>(visitor: ArubickVisitor<Result>): Result {
		if (visitor.visitMethodCall) return visitor.visitMethodCall(this);
		else return visitor.visitChildren(this);
	}
}


export class ComparisonContext extends ParserRuleContext {
	public variable(): VariableContext {
		return this.getRuleContext(0, VariableContext);
	}
	public IS(): TerminalNode { return this.getToken(ArubickParser.IS, 0); }
	public expression(): ExpressionContext | undefined {
		return this.tryGetRuleContext(0, ExpressionContext);
	}
	public storage(): StorageContext | undefined {
		return this.tryGetRuleContext(0, StorageContext);
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return ArubickParser.RULE_comparison; }
	@Override
	public enterRule(listener: ArubickListener): void {
		if (listener.enterComparison) listener.enterComparison(this);
	}
	@Override
	public exitRule(listener: ArubickListener): void {
		if (listener.exitComparison) listener.exitComparison(this);
	}
	@Override
	public accept<Result>(visitor: ArubickVisitor<Result>): Result {
		if (visitor.visitComparison) return visitor.visitComparison(this);
		else return visitor.visitChildren(this);
	}
}


export class ExpressionContext extends ParserRuleContext {
	public STRING(): TerminalNode | undefined { return this.tryGetToken(ArubickParser.STRING, 0); }
	public NUMBER(): TerminalNode | undefined { return this.tryGetToken(ArubickParser.NUMBER, 0); }
	public variable(): VariableContext | undefined {
		return this.tryGetRuleContext(0, VariableContext);
	}
	public accessVariable(): AccessVariableContext | undefined {
		return this.tryGetRuleContext(0, AccessVariableContext);
	}
	public methodCall(): MethodCallContext | undefined {
		return this.tryGetRuleContext(0, MethodCallContext);
	}
	public array(): ArrayContext | undefined {
		return this.tryGetRuleContext(0, ArrayContext);
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return ArubickParser.RULE_expression; }
	@Override
	public enterRule(listener: ArubickListener): void {
		if (listener.enterExpression) listener.enterExpression(this);
	}
	@Override
	public exitRule(listener: ArubickListener): void {
		if (listener.exitExpression) listener.exitExpression(this);
	}
	@Override
	public accept<Result>(visitor: ArubickVisitor<Result>): Result {
		if (visitor.visitExpression) return visitor.visitExpression(this);
		else return visitor.visitChildren(this);
	}
}


export class ArrayContext extends ParserRuleContext {
	public LBRACKET(): TerminalNode { return this.getToken(ArubickParser.LBRACKET, 0); }
	public expression(): ExpressionContext[];
	public expression(i: number): ExpressionContext;
	public expression(i?: number): ExpressionContext | ExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExpressionContext);
		} else {
			return this.getRuleContext(i, ExpressionContext);
		}
	}
	public RBRACKET(): TerminalNode { return this.getToken(ArubickParser.RBRACKET, 0); }
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return ArubickParser.RULE_array; }
	@Override
	public enterRule(listener: ArubickListener): void {
		if (listener.enterArray) listener.enterArray(this);
	}
	@Override
	public exitRule(listener: ArubickListener): void {
		if (listener.exitArray) listener.exitArray(this);
	}
	@Override
	public accept<Result>(visitor: ArubickVisitor<Result>): Result {
		if (visitor.visitArray) return visitor.visitArray(this);
		else return visitor.visitChildren(this);
	}
}


export class ElseStatementContext extends ParserRuleContext {
	public ELSE(): TerminalNode { return this.getToken(ArubickParser.ELSE, 0); }
	public LSCOPE(): TerminalNode { return this.getToken(ArubickParser.LSCOPE, 0); }
	public RSCOPE(): TerminalNode { return this.getToken(ArubickParser.RSCOPE, 0); }
	public statement(): StatementContext[];
	public statement(i: number): StatementContext;
	public statement(i?: number): StatementContext | StatementContext[] {
		if (i === undefined) {
			return this.getRuleContexts(StatementContext);
		} else {
			return this.getRuleContext(i, StatementContext);
		}
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return ArubickParser.RULE_elseStatement; }
	@Override
	public enterRule(listener: ArubickListener): void {
		if (listener.enterElseStatement) listener.enterElseStatement(this);
	}
	@Override
	public exitRule(listener: ArubickListener): void {
		if (listener.exitElseStatement) listener.exitElseStatement(this);
	}
	@Override
	public accept<Result>(visitor: ArubickVisitor<Result>): Result {
		if (visitor.visitElseStatement) return visitor.visitElseStatement(this);
		else return visitor.visitChildren(this);
	}
}


export class IfStatementContext extends ParserRuleContext {
	public IF(): TerminalNode { return this.getToken(ArubickParser.IF, 0); }
	public comparison(): ComparisonContext[];
	public comparison(i: number): ComparisonContext;
	public comparison(i?: number): ComparisonContext | ComparisonContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ComparisonContext);
		} else {
			return this.getRuleContext(i, ComparisonContext);
		}
	}
	public LSCOPE(): TerminalNode { return this.getToken(ArubickParser.LSCOPE, 0); }
	public RSCOPE(): TerminalNode { return this.getToken(ArubickParser.RSCOPE, 0); }
	public statement(): StatementContext[];
	public statement(i: number): StatementContext;
	public statement(i?: number): StatementContext | StatementContext[] {
		if (i === undefined) {
			return this.getRuleContexts(StatementContext);
		} else {
			return this.getRuleContext(i, StatementContext);
		}
	}
	public elseStatement(): ElseStatementContext | undefined {
		return this.tryGetRuleContext(0, ElseStatementContext);
	}
	public AND(): TerminalNode[];
	public AND(i: number): TerminalNode;
	public AND(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(ArubickParser.AND);
		} else {
			return this.getToken(ArubickParser.AND, i);
		}
	}
	public OR(): TerminalNode[];
	public OR(i: number): TerminalNode;
	public OR(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(ArubickParser.OR);
		} else {
			return this.getToken(ArubickParser.OR, i);
		}
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return ArubickParser.RULE_ifStatement; }
	@Override
	public enterRule(listener: ArubickListener): void {
		if (listener.enterIfStatement) listener.enterIfStatement(this);
	}
	@Override
	public exitRule(listener: ArubickListener): void {
		if (listener.exitIfStatement) listener.exitIfStatement(this);
	}
	@Override
	public accept<Result>(visitor: ArubickVisitor<Result>): Result {
		if (visitor.visitIfStatement) return visitor.visitIfStatement(this);
		else return visitor.visitChildren(this);
	}
}


export class StatementContext extends ParserRuleContext {
	public assign(): AssignContext | undefined {
		return this.tryGetRuleContext(0, AssignContext);
	}
	public methodCall(): MethodCallContext | undefined {
		return this.tryGetRuleContext(0, MethodCallContext);
	}
	public ifStatement(): IfStatementContext | undefined {
		return this.tryGetRuleContext(0, IfStatementContext);
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return ArubickParser.RULE_statement; }
	@Override
	public enterRule(listener: ArubickListener): void {
		if (listener.enterStatement) listener.enterStatement(this);
	}
	@Override
	public exitRule(listener: ArubickListener): void {
		if (listener.exitStatement) listener.exitStatement(this);
	}
	@Override
	public accept<Result>(visitor: ArubickVisitor<Result>): Result {
		if (visitor.visitStatement) return visitor.visitStatement(this);
		else return visitor.visitChildren(this);
	}
}


export class BotDefinitionContext extends ParserRuleContext {
	public ID(): TerminalNode { return this.getToken(ArubickParser.ID, 0); }
	public NUMBER(): TerminalNode[];
	public NUMBER(i: number): TerminalNode;
	public NUMBER(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(ArubickParser.NUMBER);
		} else {
			return this.getToken(ArubickParser.NUMBER, i);
		}
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return ArubickParser.RULE_botDefinition; }
	@Override
	public enterRule(listener: ArubickListener): void {
		if (listener.enterBotDefinition) listener.enterBotDefinition(this);
	}
	@Override
	public exitRule(listener: ArubickListener): void {
		if (listener.exitBotDefinition) listener.exitBotDefinition(this);
	}
	@Override
	public accept<Result>(visitor: ArubickVisitor<Result>): Result {
		if (visitor.visitBotDefinition) return visitor.visitBotDefinition(this);
		else return visitor.visitChildren(this);
	}
}


export class MainContext extends ParserRuleContext {
	public LSCOPE(): TerminalNode { return this.getToken(ArubickParser.LSCOPE, 0); }
	public RSCOPE(): TerminalNode { return this.getToken(ArubickParser.RSCOPE, 0); }
	public statement(): StatementContext[];
	public statement(i: number): StatementContext;
	public statement(i?: number): StatementContext | StatementContext[] {
		if (i === undefined) {
			return this.getRuleContexts(StatementContext);
		} else {
			return this.getRuleContext(i, StatementContext);
		}
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return ArubickParser.RULE_main; }
	@Override
	public enterRule(listener: ArubickListener): void {
		if (listener.enterMain) listener.enterMain(this);
	}
	@Override
	public exitRule(listener: ArubickListener): void {
		if (listener.exitMain) listener.exitMain(this);
	}
	@Override
	public accept<Result>(visitor: ArubickVisitor<Result>): Result {
		if (visitor.visitMain) return visitor.visitMain(this);
		else return visitor.visitChildren(this);
	}
}


export class ProgramContext extends ParserRuleContext {
	public botDefinition(): BotDefinitionContext {
		return this.getRuleContext(0, BotDefinitionContext);
	}
	public main(): MainContext {
		return this.getRuleContext(0, MainContext);
	}
	public statement(): StatementContext[];
	public statement(i: number): StatementContext;
	public statement(i?: number): StatementContext | StatementContext[] {
		if (i === undefined) {
			return this.getRuleContexts(StatementContext);
		} else {
			return this.getRuleContext(i, StatementContext);
		}
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return ArubickParser.RULE_program; }
	@Override
	public enterRule(listener: ArubickListener): void {
		if (listener.enterProgram) listener.enterProgram(this);
	}
	@Override
	public exitRule(listener: ArubickListener): void {
		if (listener.exitProgram) listener.exitProgram(this);
	}
	@Override
	public accept<Result>(visitor: ArubickVisitor<Result>): Result {
		if (visitor.visitProgram) return visitor.visitProgram(this);
		else return visitor.visitChildren(this);
	}
}


