// Generated from e:\Workspace\Me\Arubick\src\antlr\Arubick.g4 by ANTLR 4.7
import org.antlr.v4.runtime.Lexer;
import org.antlr.v4.runtime.CharStream;
import org.antlr.v4.runtime.Token;
import org.antlr.v4.runtime.TokenStream;
import org.antlr.v4.runtime.*;
import org.antlr.v4.runtime.atn.*;
import org.antlr.v4.runtime.dfa.DFA;
import org.antlr.v4.runtime.misc.*;

@SuppressWarnings({"all", "warnings", "unchecked", "unused", "cast"})
public class ArubickLexer extends Lexer {
	static { RuntimeMetaData.checkVersion("4.7", RuntimeMetaData.VERSION); }

	protected static final DFA[] _decisionToDFA;
	protected static final PredictionContextCache _sharedContextCache =
		new PredictionContextCache();
	public static final int
		T__0=1, T__1=2, T__2=3, T__3=4, T__4=5, WS=6, EOL=7, DEF=8, IF=9, ELSE=10, 
		IS=11, AWAIT=12, AND=13, OR=14, LBRACKET=15, RBRACKET=16, LPARENT=17, 
		RPARENT=18, LSCOPE=19, RSCOPE=20, ASSIGN=21, STRING=22, NUMBER=23, ID=24;
	public static String[] channelNames = {
		"DEFAULT_TOKEN_CHANNEL", "HIDDEN"
	};

	public static String[] modeNames = {
		"DEFAULT_MODE"
	};

	public static final String[] ruleNames = {
		"T__0", "T__1", "T__2", "T__3", "T__4", "WS", "EOL", "DEF", "IF", "ELSE", 
		"IS", "AWAIT", "AND", "OR", "LBRACKET", "RBRACKET", "LPARENT", "RPARENT", 
		"LSCOPE", "RSCOPE", "ASSIGN", "STRING", "NUMBER", "ID"
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


	public ArubickLexer(CharStream input) {
		super(input);
		_interp = new LexerATNSimulator(this,_ATN,_decisionToDFA,_sharedContextCache);
	}

	@Override
	public String getGrammarFileName() { return "Arubick.g4"; }

	@Override
	public String[] getRuleNames() { return ruleNames; }

	@Override
	public String getSerializedATN() { return _serializedATN; }

	@Override
	public String[] getChannelNames() { return channelNames; }

	@Override
	public String[] getModeNames() { return modeNames; }

	@Override
	public ATN getATN() { return _ATN; }

	public static final String _serializedATN =
		"\3\u608b\ua72a\u8133\ub9ed\u417c\u3be7\u7786\u5964\2\32\u0092\b\1\4\2"+
		"\t\2\4\3\t\3\4\4\t\4\4\5\t\5\4\6\t\6\4\7\t\7\4\b\t\b\4\t\t\t\4\n\t\n\4"+
		"\13\t\13\4\f\t\f\4\r\t\r\4\16\t\16\4\17\t\17\4\20\t\20\4\21\t\21\4\22"+
		"\t\22\4\23\t\23\4\24\t\24\4\25\t\25\4\26\t\26\4\27\t\27\4\30\t\30\4\31"+
		"\t\31\3\2\3\2\3\3\3\3\3\4\3\4\3\5\3\5\3\6\3\6\3\6\3\6\3\6\3\7\6\7B\n\7"+
		"\r\7\16\7C\3\7\3\7\3\b\6\bI\n\b\r\b\16\bJ\3\b\3\b\3\t\3\t\3\t\3\t\3\n"+
		"\3\n\3\n\3\13\3\13\3\13\3\13\3\13\3\f\3\f\3\f\3\r\3\r\3\r\3\r\3\r\3\r"+
		"\3\16\3\16\3\16\3\16\3\17\3\17\3\17\3\20\3\20\3\21\3\21\3\22\3\22\3\23"+
		"\3\23\3\24\3\24\3\25\3\25\3\26\3\26\3\27\3\27\3\27\3\27\7\27}\n\27\f\27"+
		"\16\27\u0080\13\27\3\27\3\27\3\30\5\30\u0085\n\30\3\30\6\30\u0088\n\30"+
		"\r\30\16\30\u0089\3\31\3\31\7\31\u008e\n\31\f\31\16\31\u0091\13\31\2\2"+
		"\32\3\3\5\4\7\5\t\6\13\7\r\b\17\t\21\n\23\13\25\f\27\r\31\16\33\17\35"+
		"\20\37\21!\22#\23%\24\'\25)\26+\27-\30/\31\61\32\3\2\b\4\2\13\13\"\"\4"+
		"\2\f\f\17\17\4\2$$^^\3\2\62;\4\2C\\c|\5\2\62;C\\c|\2\u0098\2\3\3\2\2\2"+
		"\2\5\3\2\2\2\2\7\3\2\2\2\2\t\3\2\2\2\2\13\3\2\2\2\2\r\3\2\2\2\2\17\3\2"+
		"\2\2\2\21\3\2\2\2\2\23\3\2\2\2\2\25\3\2\2\2\2\27\3\2\2\2\2\31\3\2\2\2"+
		"\2\33\3\2\2\2\2\35\3\2\2\2\2\37\3\2\2\2\2!\3\2\2\2\2#\3\2\2\2\2%\3\2\2"+
		"\2\2\'\3\2\2\2\2)\3\2\2\2\2+\3\2\2\2\2-\3\2\2\2\2/\3\2\2\2\2\61\3\2\2"+
		"\2\3\63\3\2\2\2\5\65\3\2\2\2\7\67\3\2\2\2\t9\3\2\2\2\13;\3\2\2\2\rA\3"+
		"\2\2\2\17H\3\2\2\2\21N\3\2\2\2\23R\3\2\2\2\25U\3\2\2\2\27Z\3\2\2\2\31"+
		"]\3\2\2\2\33c\3\2\2\2\35g\3\2\2\2\37j\3\2\2\2!l\3\2\2\2#n\3\2\2\2%p\3"+
		"\2\2\2\'r\3\2\2\2)t\3\2\2\2+v\3\2\2\2-x\3\2\2\2/\u0084\3\2\2\2\61\u008b"+
		"\3\2\2\2\63\64\7\61\2\2\64\4\3\2\2\2\65\66\7\60\2\2\66\6\3\2\2\2\678\7"+
		".\2\28\b\3\2\2\29:\7<\2\2:\n\3\2\2\2;<\7o\2\2<=\7c\2\2=>\7k\2\2>?\7p\2"+
		"\2?\f\3\2\2\2@B\t\2\2\2A@\3\2\2\2BC\3\2\2\2CA\3\2\2\2CD\3\2\2\2DE\3\2"+
		"\2\2EF\b\7\2\2F\16\3\2\2\2GI\t\3\2\2HG\3\2\2\2IJ\3\2\2\2JH\3\2\2\2JK\3"+
		"\2\2\2KL\3\2\2\2LM\b\b\2\2M\20\3\2\2\2NO\7f\2\2OP\7g\2\2PQ\7h\2\2Q\22"+
		"\3\2\2\2RS\7k\2\2ST\7h\2\2T\24\3\2\2\2UV\7g\2\2VW\7n\2\2WX\7u\2\2XY\7"+
		"g\2\2Y\26\3\2\2\2Z[\7k\2\2[\\\7u\2\2\\\30\3\2\2\2]^\7c\2\2^_\7y\2\2_`"+
		"\7c\2\2`a\7k\2\2ab\7v\2\2b\32\3\2\2\2cd\7c\2\2de\7p\2\2ef\7f\2\2f\34\3"+
		"\2\2\2gh\7q\2\2hi\7t\2\2i\36\3\2\2\2jk\7]\2\2k \3\2\2\2lm\7_\2\2m\"\3"+
		"\2\2\2no\7*\2\2o$\3\2\2\2pq\7+\2\2q&\3\2\2\2rs\7}\2\2s(\3\2\2\2tu\7\177"+
		"\2\2u*\3\2\2\2vw\7?\2\2w,\3\2\2\2x~\7$\2\2yz\7^\2\2z}\7$\2\2{}\n\4\2\2"+
		"|y\3\2\2\2|{\3\2\2\2}\u0080\3\2\2\2~|\3\2\2\2~\177\3\2\2\2\177\u0081\3"+
		"\2\2\2\u0080~\3\2\2\2\u0081\u0082\7$\2\2\u0082.\3\2\2\2\u0083\u0085\7"+
		"/\2\2\u0084\u0083\3\2\2\2\u0084\u0085\3\2\2\2\u0085\u0087\3\2\2\2\u0086"+
		"\u0088\t\5\2\2\u0087\u0086\3\2\2\2\u0088\u0089\3\2\2\2\u0089\u0087\3\2"+
		"\2\2\u0089\u008a\3\2\2\2\u008a\60\3\2\2\2\u008b\u008f\t\6\2\2\u008c\u008e"+
		"\t\7\2\2\u008d\u008c\3\2\2\2\u008e\u0091\3\2\2\2\u008f\u008d\3\2\2\2\u008f"+
		"\u0090\3\2\2\2\u0090\62\3\2\2\2\u0091\u008f\3\2\2\2\n\2CJ|~\u0084\u0089"+
		"\u008f\3\b\2\2";
	public static final ATN _ATN =
		new ATNDeserializer().deserialize(_serializedATN.toCharArray());
	static {
		_decisionToDFA = new DFA[_ATN.getNumberOfDecisions()];
		for (int i = 0; i < _ATN.getNumberOfDecisions(); i++) {
			_decisionToDFA[i] = new DFA(_ATN.getDecisionState(i), i);
		}
	}
}