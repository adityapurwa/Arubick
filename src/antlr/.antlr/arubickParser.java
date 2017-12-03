// Generated from e:\Workspace\Me\Arubick\src\antlr\Arubick.g4 by ANTLR 4.7
import org.antlr.v4.runtime.atn.*;
import org.antlr.v4.runtime.dfa.DFA;
import org.antlr.v4.runtime.*;
import org.antlr.v4.runtime.misc.*;
import org.antlr.v4.runtime.tree.*;
import java.util.List;
import java.util.Iterator;
import java.util.ArrayList;

@SuppressWarnings({"all", "warnings", "unchecked", "unused", "cast"})
public class ArubickParser extends Parser {
	static { RuntimeMetaData.checkVersion("4.7", RuntimeMetaData.VERSION); }

	protected static final DFA[] _decisionToDFA;
	protected static final PredictionContextCache _sharedContextCache =
		new PredictionContextCache();
	public static final int
		T__0=1, T__1=2, T__2=3, T__3=4, T__4=5, WS=6, EOL=7, DEF=8, IF=9, ELSE=10, 
		IS=11, AWAIT=12, AND=13, OR=14, LBRACKET=15, RBRACKET=16, LPARENT=17, 
		RPARENT=18, LSCOPE=19, RSCOPE=20, ASSIGN=21, STRING=22, NUMBER=23, ID=24;
	public static final int
		RULE_storage = 0, RULE_defStorage = 1, RULE_variable = 2, RULE_defVariable = 3, 
		RULE_accessVariable = 4, RULE_assign = 5, RULE_methodParameters = 6, RULE_methodCall = 7, 
		RULE_comparison = 8, RULE_expression = 9, RULE_array = 10, RULE_elseStatement = 11, 
		RULE_ifStatement = 12, RULE_statement = 13, RULE_botDefinition = 14, RULE_main = 15, 
		RULE_program = 16;
	public static final String[] ruleNames = {
		"storage", "defStorage", "variable", "defVariable", "accessVariable", 
		"assign", "methodParameters", "methodCall", "comparison", "expression", 
		"array", "elseStatement", "ifStatement", "statement", "botDefinition", 
		"main", "program"
	};

	private static final String[] _LITERAL_NAMES = {
		null, "'/'", "'.'", "','", "':'", "'main'", null, null, "'def'", "'if'", 
		"'else'", "'is'", "'await'", "'and'", "'or'", "'['", "']'", "'('", "')'", 
		"'{'", "'}'", "'='"
	};
	private static final String[] _SYMBOLIC_NAMES = {
		null, null, null, null, null, null, "WS", "EOL", "DEF", "IF", "ELSE", 
		"IS", "AWAIT", "AND", "OR", "LBRACKET", "RBRACKET", "LPARENT", "RPARENT", 
		"LSCOPE", "RSCOPE", "ASSIGN", "STRING", "NUMBER", "ID"
	};
	public static final Vocabulary VOCABULARY = new VocabularyImpl(_LITERAL_NAMES, _SYMBOLIC_NAMES);

	/**
	 * @deprecated Use {@link #VOCABULARY} instead.
	 */
	@Deprecated
	public static final String[] tokenNames;
	static {
		tokenNames = new String[_SYMBOLIC_NAMES.length];
		for (int i = 0; i < tokenNames.length; i++) {
			tokenNames[i] = VOCABULARY.getLiteralName(i);
			if (tokenNames[i] == null) {
				tokenNames[i] = VOCABULARY.getSymbolicName(i);
			}

			if (tokenNames[i] == null) {
				tokenNames[i] = "<INVALID>";
			}
		}
	}

	@Override
	@Deprecated
	public String[] getTokenNames() {
		return tokenNames;
	}

	@Override

	public Vocabulary getVocabulary() {
		return VOCABULARY;
	}

	@Override
	public String getGrammarFileName() { return "Arubick.g4"; }

	@Override
	public String[] getRuleNames() { return ruleNames; }

	@Override
	public String getSerializedATN() { return _serializedATN; }

	@Override
	public ATN getATN() { return _ATN; }

	public ArubickParser(TokenStream input) {
		super(input);
		_interp = new ParserATNSimulator(this,_ATN,_decisionToDFA,_sharedContextCache);
	}
	public static class StorageContext extends ParserRuleContext {
		public List<TerminalNode> ID() { return getTokens(ArubickParser.ID); }
		public TerminalNode ID(int i) {
			return getToken(ArubickParser.ID, i);
		}
		public StorageContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_storage; }
	}

	public final StorageContext storage() throws RecognitionException {
		StorageContext _localctx = new StorageContext(_ctx, getState());
		enterRule(_localctx, 0, RULE_storage);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(34);
			match(ID);
			setState(35);
			match(T__0);
			setState(36);
			match(ID);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class DefStorageContext extends ParserRuleContext {
		public TerminalNode DEF() { return getToken(ArubickParser.DEF, 0); }
		public StorageContext storage() {
			return getRuleContext(StorageContext.class,0);
		}
		public DefStorageContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_defStorage; }
	}

	public final DefStorageContext defStorage() throws RecognitionException {
		DefStorageContext _localctx = new DefStorageContext(_ctx, getState());
		enterRule(_localctx, 2, RULE_defStorage);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(38);
			match(DEF);
			setState(39);
			storage();
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class VariableContext extends ParserRuleContext {
		public TerminalNode ID() { return getToken(ArubickParser.ID, 0); }
		public VariableContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_variable; }
	}

	public final VariableContext variable() throws RecognitionException {
		VariableContext _localctx = new VariableContext(_ctx, getState());
		enterRule(_localctx, 4, RULE_variable);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(41);
			match(ID);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class DefVariableContext extends ParserRuleContext {
		public TerminalNode DEF() { return getToken(ArubickParser.DEF, 0); }
		public VariableContext variable() {
			return getRuleContext(VariableContext.class,0);
		}
		public DefVariableContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_defVariable; }
	}

	public final DefVariableContext defVariable() throws RecognitionException {
		DefVariableContext _localctx = new DefVariableContext(_ctx, getState());
		enterRule(_localctx, 6, RULE_defVariable);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(43);
			match(DEF);
			setState(44);
			variable();
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class AccessVariableContext extends ParserRuleContext {
		public List<VariableContext> variable() {
			return getRuleContexts(VariableContext.class);
		}
		public VariableContext variable(int i) {
			return getRuleContext(VariableContext.class,i);
		}
		public AccessVariableContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_accessVariable; }
	}

	public final AccessVariableContext accessVariable() throws RecognitionException {
		AccessVariableContext _localctx = new AccessVariableContext(_ctx, getState());
		enterRule(_localctx, 8, RULE_accessVariable);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(46);
			variable();
			setState(49); 
			_errHandler.sync(this);
			_la = _input.LA(1);
			do {
				{
				{
				setState(47);
				match(T__1);
				setState(48);
				variable();
				}
				}
				setState(51); 
				_errHandler.sync(this);
				_la = _input.LA(1);
			} while ( _la==T__1 );
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class AssignContext extends ParserRuleContext {
		public StorageContext storage() {
			return getRuleContext(StorageContext.class,0);
		}
		public TerminalNode ASSIGN() { return getToken(ArubickParser.ASSIGN, 0); }
		public ExpressionContext expression() {
			return getRuleContext(ExpressionContext.class,0);
		}
		public DefStorageContext defStorage() {
			return getRuleContext(DefStorageContext.class,0);
		}
		public VariableContext variable() {
			return getRuleContext(VariableContext.class,0);
		}
		public DefVariableContext defVariable() {
			return getRuleContext(DefVariableContext.class,0);
		}
		public AssignContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_assign; }
	}

	public final AssignContext assign() throws RecognitionException {
		AssignContext _localctx = new AssignContext(_ctx, getState());
		enterRule(_localctx, 10, RULE_assign);
		try {
			setState(69);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,1,_ctx) ) {
			case 1:
				enterOuterAlt(_localctx, 1);
				{
				setState(53);
				storage();
				setState(54);
				match(ASSIGN);
				setState(55);
				expression();
				}
				break;
			case 2:
				enterOuterAlt(_localctx, 2);
				{
				setState(57);
				defStorage();
				setState(58);
				match(ASSIGN);
				setState(59);
				expression();
				}
				break;
			case 3:
				enterOuterAlt(_localctx, 3);
				{
				setState(61);
				variable();
				setState(62);
				match(ASSIGN);
				setState(63);
				expression();
				}
				break;
			case 4:
				enterOuterAlt(_localctx, 4);
				{
				setState(65);
				defVariable();
				setState(66);
				match(ASSIGN);
				setState(67);
				expression();
				}
				break;
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class MethodParametersContext extends ParserRuleContext {
		public List<ExpressionContext> expression() {
			return getRuleContexts(ExpressionContext.class);
		}
		public ExpressionContext expression(int i) {
			return getRuleContext(ExpressionContext.class,i);
		}
		public MethodParametersContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_methodParameters; }
	}

	public final MethodParametersContext methodParameters() throws RecognitionException {
		MethodParametersContext _localctx = new MethodParametersContext(_ctx, getState());
		enterRule(_localctx, 12, RULE_methodParameters);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(71);
			expression();
			setState(76);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while (_la==T__2) {
				{
				{
				setState(72);
				match(T__2);
				setState(73);
				expression();
				}
				}
				setState(78);
				_errHandler.sync(this);
				_la = _input.LA(1);
			}
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class MethodCallContext extends ParserRuleContext {
		public StorageContext storage() {
			return getRuleContext(StorageContext.class,0);
		}
		public TerminalNode LPARENT() { return getToken(ArubickParser.LPARENT, 0); }
		public TerminalNode RPARENT() { return getToken(ArubickParser.RPARENT, 0); }
		public TerminalNode AWAIT() { return getToken(ArubickParser.AWAIT, 0); }
		public MethodParametersContext methodParameters() {
			return getRuleContext(MethodParametersContext.class,0);
		}
		public VariableContext variable() {
			return getRuleContext(VariableContext.class,0);
		}
		public MethodCallContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_methodCall; }
	}

	public final MethodCallContext methodCall() throws RecognitionException {
		MethodCallContext _localctx = new MethodCallContext(_ctx, getState());
		enterRule(_localctx, 14, RULE_methodCall);
		int _la;
		try {
			setState(99);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,7,_ctx) ) {
			case 1:
				enterOuterAlt(_localctx, 1);
				{
				setState(80);
				_errHandler.sync(this);
				_la = _input.LA(1);
				if (_la==AWAIT) {
					{
					setState(79);
					match(AWAIT);
					}
				}

				setState(82);
				storage();
				setState(83);
				match(LPARENT);
				setState(85);
				_errHandler.sync(this);
				_la = _input.LA(1);
				if ((((_la) & ~0x3f) == 0 && ((1L << _la) & ((1L << AWAIT) | (1L << LBRACKET) | (1L << STRING) | (1L << NUMBER) | (1L << ID))) != 0)) {
					{
					setState(84);
					methodParameters();
					}
				}

				setState(87);
				match(RPARENT);
				}
				break;
			case 2:
				enterOuterAlt(_localctx, 2);
				{
				setState(90);
				_errHandler.sync(this);
				_la = _input.LA(1);
				if (_la==AWAIT) {
					{
					setState(89);
					match(AWAIT);
					}
				}

				setState(92);
				variable();
				setState(93);
				match(LPARENT);
				setState(95);
				_errHandler.sync(this);
				_la = _input.LA(1);
				if ((((_la) & ~0x3f) == 0 && ((1L << _la) & ((1L << AWAIT) | (1L << LBRACKET) | (1L << STRING) | (1L << NUMBER) | (1L << ID))) != 0)) {
					{
					setState(94);
					methodParameters();
					}
				}

				setState(97);
				match(RPARENT);
				}
				break;
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class ComparisonContext extends ParserRuleContext {
		public VariableContext variable() {
			return getRuleContext(VariableContext.class,0);
		}
		public TerminalNode IS() { return getToken(ArubickParser.IS, 0); }
		public ExpressionContext expression() {
			return getRuleContext(ExpressionContext.class,0);
		}
		public StorageContext storage() {
			return getRuleContext(StorageContext.class,0);
		}
		public ComparisonContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_comparison; }
	}

	public final ComparisonContext comparison() throws RecognitionException {
		ComparisonContext _localctx = new ComparisonContext(_ctx, getState());
		enterRule(_localctx, 16, RULE_comparison);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(101);
			variable();
			setState(102);
			match(IS);
			setState(105);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,8,_ctx) ) {
			case 1:
				{
				setState(103);
				expression();
				}
				break;
			case 2:
				{
				setState(104);
				storage();
				}
				break;
			}
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class ExpressionContext extends ParserRuleContext {
		public TerminalNode STRING() { return getToken(ArubickParser.STRING, 0); }
		public TerminalNode NUMBER() { return getToken(ArubickParser.NUMBER, 0); }
		public VariableContext variable() {
			return getRuleContext(VariableContext.class,0);
		}
		public AccessVariableContext accessVariable() {
			return getRuleContext(AccessVariableContext.class,0);
		}
		public MethodCallContext methodCall() {
			return getRuleContext(MethodCallContext.class,0);
		}
		public ArrayContext array() {
			return getRuleContext(ArrayContext.class,0);
		}
		public ExpressionContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_expression; }
	}

	public final ExpressionContext expression() throws RecognitionException {
		ExpressionContext _localctx = new ExpressionContext(_ctx, getState());
		enterRule(_localctx, 18, RULE_expression);
		try {
			setState(113);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,9,_ctx) ) {
			case 1:
				enterOuterAlt(_localctx, 1);
				{
				setState(107);
				match(STRING);
				}
				break;
			case 2:
				enterOuterAlt(_localctx, 2);
				{
				setState(108);
				match(NUMBER);
				}
				break;
			case 3:
				enterOuterAlt(_localctx, 3);
				{
				setState(109);
				variable();
				}
				break;
			case 4:
				enterOuterAlt(_localctx, 4);
				{
				setState(110);
				accessVariable();
				}
				break;
			case 5:
				enterOuterAlt(_localctx, 5);
				{
				setState(111);
				methodCall();
				}
				break;
			case 6:
				enterOuterAlt(_localctx, 6);
				{
				setState(112);
				array();
				}
				break;
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class ArrayContext extends ParserRuleContext {
		public TerminalNode LBRACKET() { return getToken(ArubickParser.LBRACKET, 0); }
		public List<ExpressionContext> expression() {
			return getRuleContexts(ExpressionContext.class);
		}
		public ExpressionContext expression(int i) {
			return getRuleContext(ExpressionContext.class,i);
		}
		public TerminalNode RBRACKET() { return getToken(ArubickParser.RBRACKET, 0); }
		public ArrayContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_array; }
	}

	public final ArrayContext array() throws RecognitionException {
		ArrayContext _localctx = new ArrayContext(_ctx, getState());
		enterRule(_localctx, 20, RULE_array);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(115);
			match(LBRACKET);
			setState(116);
			expression();
			setState(121);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while (_la==T__2) {
				{
				{
				setState(117);
				match(T__2);
				setState(118);
				expression();
				}
				}
				setState(123);
				_errHandler.sync(this);
				_la = _input.LA(1);
			}
			setState(124);
			match(RBRACKET);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class ElseStatementContext extends ParserRuleContext {
		public TerminalNode ELSE() { return getToken(ArubickParser.ELSE, 0); }
		public TerminalNode LSCOPE() { return getToken(ArubickParser.LSCOPE, 0); }
		public TerminalNode RSCOPE() { return getToken(ArubickParser.RSCOPE, 0); }
		public List<StatementContext> statement() {
			return getRuleContexts(StatementContext.class);
		}
		public StatementContext statement(int i) {
			return getRuleContext(StatementContext.class,i);
		}
		public ElseStatementContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_elseStatement; }
	}

	public final ElseStatementContext elseStatement() throws RecognitionException {
		ElseStatementContext _localctx = new ElseStatementContext(_ctx, getState());
		enterRule(_localctx, 22, RULE_elseStatement);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(126);
			match(ELSE);
			setState(127);
			match(LSCOPE);
			setState(131);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while ((((_la) & ~0x3f) == 0 && ((1L << _la) & ((1L << DEF) | (1L << IF) | (1L << AWAIT) | (1L << ID))) != 0)) {
				{
				{
				setState(128);
				statement();
				}
				}
				setState(133);
				_errHandler.sync(this);
				_la = _input.LA(1);
			}
			setState(134);
			match(RSCOPE);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class IfStatementContext extends ParserRuleContext {
		public TerminalNode IF() { return getToken(ArubickParser.IF, 0); }
		public List<ComparisonContext> comparison() {
			return getRuleContexts(ComparisonContext.class);
		}
		public ComparisonContext comparison(int i) {
			return getRuleContext(ComparisonContext.class,i);
		}
		public TerminalNode LSCOPE() { return getToken(ArubickParser.LSCOPE, 0); }
		public TerminalNode RSCOPE() { return getToken(ArubickParser.RSCOPE, 0); }
		public List<StatementContext> statement() {
			return getRuleContexts(StatementContext.class);
		}
		public StatementContext statement(int i) {
			return getRuleContext(StatementContext.class,i);
		}
		public ElseStatementContext elseStatement() {
			return getRuleContext(ElseStatementContext.class,0);
		}
		public List<TerminalNode> AND() { return getTokens(ArubickParser.AND); }
		public TerminalNode AND(int i) {
			return getToken(ArubickParser.AND, i);
		}
		public List<TerminalNode> OR() { return getTokens(ArubickParser.OR); }
		public TerminalNode OR(int i) {
			return getToken(ArubickParser.OR, i);
		}
		public IfStatementContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_ifStatement; }
	}

	public final IfStatementContext ifStatement() throws RecognitionException {
		IfStatementContext _localctx = new IfStatementContext(_ctx, getState());
		enterRule(_localctx, 24, RULE_ifStatement);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(136);
			match(IF);
			setState(137);
			comparison();
			setState(142);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while (_la==AND || _la==OR) {
				{
				{
				setState(138);
				_la = _input.LA(1);
				if ( !(_la==AND || _la==OR) ) {
				_errHandler.recoverInline(this);
				}
				else {
					if ( _input.LA(1)==Token.EOF ) matchedEOF = true;
					_errHandler.reportMatch(this);
					consume();
				}
				setState(139);
				comparison();
				}
				}
				setState(144);
				_errHandler.sync(this);
				_la = _input.LA(1);
			}
			setState(145);
			match(LSCOPE);
			setState(149);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while ((((_la) & ~0x3f) == 0 && ((1L << _la) & ((1L << DEF) | (1L << IF) | (1L << AWAIT) | (1L << ID))) != 0)) {
				{
				{
				setState(146);
				statement();
				}
				}
				setState(151);
				_errHandler.sync(this);
				_la = _input.LA(1);
			}
			setState(152);
			match(RSCOPE);
			setState(154);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==ELSE) {
				{
				setState(153);
				elseStatement();
				}
			}

			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class StatementContext extends ParserRuleContext {
		public AssignContext assign() {
			return getRuleContext(AssignContext.class,0);
		}
		public MethodCallContext methodCall() {
			return getRuleContext(MethodCallContext.class,0);
		}
		public IfStatementContext ifStatement() {
			return getRuleContext(IfStatementContext.class,0);
		}
		public StatementContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_statement; }
	}

	public final StatementContext statement() throws RecognitionException {
		StatementContext _localctx = new StatementContext(_ctx, getState());
		enterRule(_localctx, 26, RULE_statement);
		try {
			setState(159);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,15,_ctx) ) {
			case 1:
				enterOuterAlt(_localctx, 1);
				{
				setState(156);
				assign();
				}
				break;
			case 2:
				enterOuterAlt(_localctx, 2);
				{
				setState(157);
				methodCall();
				}
				break;
			case 3:
				enterOuterAlt(_localctx, 3);
				{
				setState(158);
				ifStatement();
				}
				break;
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class BotDefinitionContext extends ParserRuleContext {
		public TerminalNode ID() { return getToken(ArubickParser.ID, 0); }
		public List<TerminalNode> NUMBER() { return getTokens(ArubickParser.NUMBER); }
		public TerminalNode NUMBER(int i) {
			return getToken(ArubickParser.NUMBER, i);
		}
		public BotDefinitionContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_botDefinition; }
	}

	public final BotDefinitionContext botDefinition() throws RecognitionException {
		BotDefinitionContext _localctx = new BotDefinitionContext(_ctx, getState());
		enterRule(_localctx, 28, RULE_botDefinition);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(161);
			match(ID);
			setState(162);
			match(T__3);
			setState(163);
			match(NUMBER);
			setState(168);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while (_la==T__1) {
				{
				{
				setState(164);
				match(T__1);
				setState(165);
				match(NUMBER);
				}
				}
				setState(170);
				_errHandler.sync(this);
				_la = _input.LA(1);
			}
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class MainContext extends ParserRuleContext {
		public TerminalNode LSCOPE() { return getToken(ArubickParser.LSCOPE, 0); }
		public TerminalNode RSCOPE() { return getToken(ArubickParser.RSCOPE, 0); }
		public List<StatementContext> statement() {
			return getRuleContexts(StatementContext.class);
		}
		public StatementContext statement(int i) {
			return getRuleContext(StatementContext.class,i);
		}
		public MainContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_main; }
	}

	public final MainContext main() throws RecognitionException {
		MainContext _localctx = new MainContext(_ctx, getState());
		enterRule(_localctx, 30, RULE_main);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(171);
			match(T__4);
			setState(172);
			match(LSCOPE);
			setState(176);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while ((((_la) & ~0x3f) == 0 && ((1L << _la) & ((1L << DEF) | (1L << IF) | (1L << AWAIT) | (1L << ID))) != 0)) {
				{
				{
				setState(173);
				statement();
				}
				}
				setState(178);
				_errHandler.sync(this);
				_la = _input.LA(1);
			}
			setState(179);
			match(RSCOPE);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class ProgramContext extends ParserRuleContext {
		public BotDefinitionContext botDefinition() {
			return getRuleContext(BotDefinitionContext.class,0);
		}
		public MainContext main() {
			return getRuleContext(MainContext.class,0);
		}
		public List<StatementContext> statement() {
			return getRuleContexts(StatementContext.class);
		}
		public StatementContext statement(int i) {
			return getRuleContext(StatementContext.class,i);
		}
		public ProgramContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_program; }
	}

	public final ProgramContext program() throws RecognitionException {
		ProgramContext _localctx = new ProgramContext(_ctx, getState());
		enterRule(_localctx, 32, RULE_program);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(181);
			botDefinition();
			setState(185);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while ((((_la) & ~0x3f) == 0 && ((1L << _la) & ((1L << DEF) | (1L << IF) | (1L << AWAIT) | (1L << ID))) != 0)) {
				{
				{
				setState(182);
				statement();
				}
				}
				setState(187);
				_errHandler.sync(this);
				_la = _input.LA(1);
			}
			setState(188);
			main();
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static final String _serializedATN =
		"\3\u608b\ua72a\u8133\ub9ed\u417c\u3be7\u7786\u5964\3\32\u00c1\4\2\t\2"+
		"\4\3\t\3\4\4\t\4\4\5\t\5\4\6\t\6\4\7\t\7\4\b\t\b\4\t\t\t\4\n\t\n\4\13"+
		"\t\13\4\f\t\f\4\r\t\r\4\16\t\16\4\17\t\17\4\20\t\20\4\21\t\21\4\22\t\22"+
		"\3\2\3\2\3\2\3\2\3\3\3\3\3\3\3\4\3\4\3\5\3\5\3\5\3\6\3\6\3\6\6\6\64\n"+
		"\6\r\6\16\6\65\3\7\3\7\3\7\3\7\3\7\3\7\3\7\3\7\3\7\3\7\3\7\3\7\3\7\3\7"+
		"\3\7\3\7\5\7H\n\7\3\b\3\b\3\b\7\bM\n\b\f\b\16\bP\13\b\3\t\5\tS\n\t\3\t"+
		"\3\t\3\t\5\tX\n\t\3\t\3\t\3\t\5\t]\n\t\3\t\3\t\3\t\5\tb\n\t\3\t\3\t\5"+
		"\tf\n\t\3\n\3\n\3\n\3\n\5\nl\n\n\3\13\3\13\3\13\3\13\3\13\3\13\5\13t\n"+
		"\13\3\f\3\f\3\f\3\f\7\fz\n\f\f\f\16\f}\13\f\3\f\3\f\3\r\3\r\3\r\7\r\u0084"+
		"\n\r\f\r\16\r\u0087\13\r\3\r\3\r\3\16\3\16\3\16\3\16\7\16\u008f\n\16\f"+
		"\16\16\16\u0092\13\16\3\16\3\16\7\16\u0096\n\16\f\16\16\16\u0099\13\16"+
		"\3\16\3\16\5\16\u009d\n\16\3\17\3\17\3\17\5\17\u00a2\n\17\3\20\3\20\3"+
		"\20\3\20\3\20\7\20\u00a9\n\20\f\20\16\20\u00ac\13\20\3\21\3\21\3\21\7"+
		"\21\u00b1\n\21\f\21\16\21\u00b4\13\21\3\21\3\21\3\22\3\22\7\22\u00ba\n"+
		"\22\f\22\16\22\u00bd\13\22\3\22\3\22\3\22\2\2\23\2\4\6\b\n\f\16\20\22"+
		"\24\26\30\32\34\36 \"\2\3\3\2\17\20\2\u00c9\2$\3\2\2\2\4(\3\2\2\2\6+\3"+
		"\2\2\2\b-\3\2\2\2\n\60\3\2\2\2\fG\3\2\2\2\16I\3\2\2\2\20e\3\2\2\2\22g"+
		"\3\2\2\2\24s\3\2\2\2\26u\3\2\2\2\30\u0080\3\2\2\2\32\u008a\3\2\2\2\34"+
		"\u00a1\3\2\2\2\36\u00a3\3\2\2\2 \u00ad\3\2\2\2\"\u00b7\3\2\2\2$%\7\32"+
		"\2\2%&\7\3\2\2&\'\7\32\2\2\'\3\3\2\2\2()\7\n\2\2)*\5\2\2\2*\5\3\2\2\2"+
		"+,\7\32\2\2,\7\3\2\2\2-.\7\n\2\2./\5\6\4\2/\t\3\2\2\2\60\63\5\6\4\2\61"+
		"\62\7\4\2\2\62\64\5\6\4\2\63\61\3\2\2\2\64\65\3\2\2\2\65\63\3\2\2\2\65"+
		"\66\3\2\2\2\66\13\3\2\2\2\678\5\2\2\289\7\27\2\29:\5\24\13\2:H\3\2\2\2"+
		";<\5\4\3\2<=\7\27\2\2=>\5\24\13\2>H\3\2\2\2?@\5\6\4\2@A\7\27\2\2AB\5\24"+
		"\13\2BH\3\2\2\2CD\5\b\5\2DE\7\27\2\2EF\5\24\13\2FH\3\2\2\2G\67\3\2\2\2"+
		"G;\3\2\2\2G?\3\2\2\2GC\3\2\2\2H\r\3\2\2\2IN\5\24\13\2JK\7\5\2\2KM\5\24"+
		"\13\2LJ\3\2\2\2MP\3\2\2\2NL\3\2\2\2NO\3\2\2\2O\17\3\2\2\2PN\3\2\2\2QS"+
		"\7\16\2\2RQ\3\2\2\2RS\3\2\2\2ST\3\2\2\2TU\5\2\2\2UW\7\23\2\2VX\5\16\b"+
		"\2WV\3\2\2\2WX\3\2\2\2XY\3\2\2\2YZ\7\24\2\2Zf\3\2\2\2[]\7\16\2\2\\[\3"+
		"\2\2\2\\]\3\2\2\2]^\3\2\2\2^_\5\6\4\2_a\7\23\2\2`b\5\16\b\2a`\3\2\2\2"+
		"ab\3\2\2\2bc\3\2\2\2cd\7\24\2\2df\3\2\2\2eR\3\2\2\2e\\\3\2\2\2f\21\3\2"+
		"\2\2gh\5\6\4\2hk\7\r\2\2il\5\24\13\2jl\5\2\2\2ki\3\2\2\2kj\3\2\2\2l\23"+
		"\3\2\2\2mt\7\30\2\2nt\7\31\2\2ot\5\6\4\2pt\5\n\6\2qt\5\20\t\2rt\5\26\f"+
		"\2sm\3\2\2\2sn\3\2\2\2so\3\2\2\2sp\3\2\2\2sq\3\2\2\2sr\3\2\2\2t\25\3\2"+
		"\2\2uv\7\21\2\2v{\5\24\13\2wx\7\5\2\2xz\5\24\13\2yw\3\2\2\2z}\3\2\2\2"+
		"{y\3\2\2\2{|\3\2\2\2|~\3\2\2\2}{\3\2\2\2~\177\7\22\2\2\177\27\3\2\2\2"+
		"\u0080\u0081\7\f\2\2\u0081\u0085\7\25\2\2\u0082\u0084\5\34\17\2\u0083"+
		"\u0082\3\2\2\2\u0084\u0087\3\2\2\2\u0085\u0083\3\2\2\2\u0085\u0086\3\2"+
		"\2\2\u0086\u0088\3\2\2\2\u0087\u0085\3\2\2\2\u0088\u0089\7\26\2\2\u0089"+
		"\31\3\2\2\2\u008a\u008b\7\13\2\2\u008b\u0090\5\22\n\2\u008c\u008d\t\2"+
		"\2\2\u008d\u008f\5\22\n\2\u008e\u008c\3\2\2\2\u008f\u0092\3\2\2\2\u0090"+
		"\u008e\3\2\2\2\u0090\u0091\3\2\2\2\u0091\u0093\3\2\2\2\u0092\u0090\3\2"+
		"\2\2\u0093\u0097\7\25\2\2\u0094\u0096\5\34\17\2\u0095\u0094\3\2\2\2\u0096"+
		"\u0099\3\2\2\2\u0097\u0095\3\2\2\2\u0097\u0098\3\2\2\2\u0098\u009a\3\2"+
		"\2\2\u0099\u0097\3\2\2\2\u009a\u009c\7\26\2\2\u009b\u009d\5\30\r\2\u009c"+
		"\u009b\3\2\2\2\u009c\u009d\3\2\2\2\u009d\33\3\2\2\2\u009e\u00a2\5\f\7"+
		"\2\u009f\u00a2\5\20\t\2\u00a0\u00a2\5\32\16\2\u00a1\u009e\3\2\2\2\u00a1"+
		"\u009f\3\2\2\2\u00a1\u00a0\3\2\2\2\u00a2\35\3\2\2\2\u00a3\u00a4\7\32\2"+
		"\2\u00a4\u00a5\7\6\2\2\u00a5\u00aa\7\31\2\2\u00a6\u00a7\7\4\2\2\u00a7"+
		"\u00a9\7\31\2\2\u00a8\u00a6\3\2\2\2\u00a9\u00ac\3\2\2\2\u00aa\u00a8\3"+
		"\2\2\2\u00aa\u00ab\3\2\2\2\u00ab\37\3\2\2\2\u00ac\u00aa\3\2\2\2\u00ad"+
		"\u00ae\7\7\2\2\u00ae\u00b2\7\25\2\2\u00af\u00b1\5\34\17\2\u00b0\u00af"+
		"\3\2\2\2\u00b1\u00b4\3\2\2\2\u00b2\u00b0\3\2\2\2\u00b2\u00b3\3\2\2\2\u00b3"+
		"\u00b5\3\2\2\2\u00b4\u00b2\3\2\2\2\u00b5\u00b6\7\26\2\2\u00b6!\3\2\2\2"+
		"\u00b7\u00bb\5\36\20\2\u00b8\u00ba\5\34\17\2\u00b9\u00b8\3\2\2\2\u00ba"+
		"\u00bd\3\2\2\2\u00bb\u00b9\3\2\2\2\u00bb\u00bc\3\2\2\2\u00bc\u00be\3\2"+
		"\2\2\u00bd\u00bb\3\2\2\2\u00be\u00bf\5 \21\2\u00bf#\3\2\2\2\25\65GNRW"+
		"\\aeks{\u0085\u0090\u0097\u009c\u00a1\u00aa\u00b2\u00bb";
	public static final ATN _ATN =
		new ATNDeserializer().deserialize(_serializedATN.toCharArray());
	static {
		_decisionToDFA = new DFA[_ATN.getNumberOfDecisions()];
		for (int i = 0; i < _ATN.getNumberOfDecisions(); i++) {
			_decisionToDFA[i] = new DFA(_ATN.getDecisionState(i), i);
		}
	}
}