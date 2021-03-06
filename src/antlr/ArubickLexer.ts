// Generated from src/antlr/Arubick.g4 by ANTLR 4.6-SNAPSHOT


import { ATN } from 'antlr4ts/atn/ATN';
import { ATNDeserializer } from 'antlr4ts/atn/ATNDeserializer';
import { CharStream } from 'antlr4ts/CharStream';
import { Lexer } from 'antlr4ts/Lexer';
import { LexerATNSimulator } from 'antlr4ts/atn/LexerATNSimulator';
import { NotNull } from 'antlr4ts/Decorators';
import { Override } from 'antlr4ts/Decorators';
import { RuleContext } from 'antlr4ts/RuleContext';
import { Vocabulary } from 'antlr4ts/Vocabulary';
import { VocabularyImpl } from 'antlr4ts/VocabularyImpl';

import * as Utils from 'antlr4ts/misc/Utils';


export class ArubickLexer extends Lexer {
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
	public static readonly modeNames: string[] = [
		"DEFAULT_MODE"
	];

	public static readonly ruleNames: string[] = [
		"T__0", "T__1", "T__2", "T__3", "T__4", "WS", "EOL", "DEF", "IF", "ELSE", 
		"IS", "AWAIT", "AND", "OR", "LBRACKET", "RBRACKET", "LPARENT", "RPARENT", 
		"LSCOPE", "RSCOPE", "ASSIGN", "STRING", "NUMBER", "ID"
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
	public static readonly VOCABULARY: Vocabulary = new VocabularyImpl(ArubickLexer._LITERAL_NAMES, ArubickLexer._SYMBOLIC_NAMES, []);

	@Override
	@NotNull
	public get vocabulary(): Vocabulary {
		return ArubickLexer.VOCABULARY;
	}


	constructor(input: CharStream) {
		super(input);
		this._interp = new LexerATNSimulator(ArubickLexer._ATN, this);
	}

	@Override
	public get grammarFileName(): string { return "Arubick.g4"; }

	@Override
	public get ruleNames(): string[] { return ArubickLexer.ruleNames; }

	@Override
	public get serializedATN(): string { return ArubickLexer._serializedATN; }

	@Override
	public get modeNames(): string[] { return ArubickLexer.modeNames; }

	public static readonly _serializedATN: string =
		"\x03\uAF6F\u8320\u479D\uB75C\u4880\u1605\u191C\uAB37\x02\x1A\x92\b\x01"+
		"\x04\x02\t\x02\x04\x03\t\x03\x04\x04\t\x04\x04\x05\t\x05\x04\x06\t\x06"+
		"\x04\x07\t\x07\x04\b\t\b\x04\t\t\t\x04\n\t\n\x04\v\t\v\x04\f\t\f\x04\r"+
		"\t\r\x04\x0E\t\x0E\x04\x0F\t\x0F\x04\x10\t\x10\x04\x11\t\x11\x04\x12\t"+
		"\x12\x04\x13\t\x13\x04\x14\t\x14\x04\x15\t\x15\x04\x16\t\x16\x04\x17\t"+
		"\x17\x04\x18\t\x18\x04\x19\t\x19\x03\x02\x03\x02\x03\x03\x03\x03\x03\x04"+
		"\x03\x04\x03\x05\x03\x05\x03\x06\x03\x06\x03\x06\x03\x06\x03\x06\x03\x07"+
		"\x06\x07B\n\x07\r\x07\x0E\x07C\x03\x07\x03\x07\x03\b\x06\bI\n\b\r\b\x0E"+
		"\bJ\x03\b\x03\b\x03\t\x03\t\x03\t\x03\t\x03\n\x03\n\x03\n\x03\v\x03\v"+
		"\x03\v\x03\v\x03\v\x03\f\x03\f\x03\f\x03\r\x03\r\x03\r\x03\r\x03\r\x03"+
		"\r\x03\x0E\x03\x0E\x03\x0E\x03\x0E\x03\x0F\x03\x0F\x03\x0F\x03\x10\x03"+
		"\x10\x03\x11\x03\x11\x03\x12\x03\x12\x03\x13\x03\x13\x03\x14\x03\x14\x03"+
		"\x15\x03\x15\x03\x16\x03\x16\x03\x17\x03\x17\x03\x17\x03\x17\x07\x17}"+
		"\n\x17\f\x17\x0E\x17\x80\v\x17\x03\x17\x03\x17\x03\x18\x05\x18\x85\n\x18"+
		"\x03\x18\x06\x18\x88\n\x18\r\x18\x0E\x18\x89\x03\x19\x03\x19\x07\x19\x8E"+
		"\n\x19\f\x19\x0E\x19\x91\v\x19\x02\x02\x02\x1A\x03\x02\x03\x05\x02\x04"+
		"\x07\x02\x05\t\x02\x06\v\x02\x07\r\x02\b\x0F\x02\t\x11\x02\n\x13\x02\v"+
		"\x15\x02\f\x17\x02\r\x19\x02\x0E\x1B\x02\x0F\x1D\x02\x10\x1F\x02\x11!"+
		"\x02\x12#\x02\x13%\x02\x14\'\x02\x15)\x02\x16+\x02\x17-\x02\x18/\x02\x19"+
		"1\x02\x1A\x03\x02\b\x04\x02\v\v\"\"\x04\x02\f\f\x0F\x0F\x04\x02$$^^\x03"+
		"\x022;\x04\x02C\\c|\x05\x022;C\\c|\x98\x02\x03\x03\x02\x02\x02\x02\x05"+
		"\x03\x02\x02\x02\x02\x07\x03\x02\x02\x02\x02\t\x03\x02\x02\x02\x02\v\x03"+
		"\x02\x02\x02\x02\r\x03\x02\x02\x02\x02\x0F\x03\x02\x02\x02\x02\x11\x03"+
		"\x02\x02\x02\x02\x13\x03\x02\x02\x02\x02\x15\x03\x02\x02\x02\x02\x17\x03"+
		"\x02\x02\x02\x02\x19\x03\x02\x02\x02\x02\x1B\x03\x02\x02\x02\x02\x1D\x03"+
		"\x02\x02\x02\x02\x1F\x03\x02\x02\x02\x02!\x03\x02\x02\x02\x02#\x03\x02"+
		"\x02\x02\x02%\x03\x02\x02\x02\x02\'\x03\x02\x02\x02\x02)\x03\x02\x02\x02"+
		"\x02+\x03\x02\x02\x02\x02-\x03\x02\x02\x02\x02/\x03\x02\x02\x02\x021\x03"+
		"\x02\x02\x02\x033\x03\x02\x02\x02\x055\x03\x02\x02\x02\x077\x03\x02\x02"+
		"\x02\t9\x03\x02\x02\x02\v;\x03\x02\x02\x02\rA\x03\x02\x02\x02\x0FH\x03"+
		"\x02\x02\x02\x11N\x03\x02\x02\x02\x13R\x03\x02\x02\x02\x15U\x03\x02\x02"+
		"\x02\x17Z\x03\x02\x02\x02\x19]\x03\x02\x02\x02\x1Bc\x03\x02\x02\x02\x1D"+
		"g\x03\x02\x02\x02\x1Fj\x03\x02\x02\x02!l\x03\x02\x02\x02#n\x03\x02\x02"+
		"\x02%p\x03\x02\x02\x02\'r\x03\x02\x02\x02)t\x03\x02\x02\x02+v\x03\x02"+
		"\x02\x02-x\x03\x02\x02\x02/\x84\x03\x02\x02\x021\x8B\x03\x02\x02\x023"+
		"4\x071\x02\x024\x04\x03\x02\x02\x0256\x070\x02\x026\x06\x03\x02\x02\x02"+
		"78\x07.\x02\x028\b\x03\x02\x02\x029:\x07<\x02\x02:\n\x03\x02\x02\x02;"+
		"<\x07o\x02\x02<=\x07c\x02\x02=>\x07k\x02\x02>?\x07p\x02\x02?\f\x03\x02"+
		"\x02\x02@B\t\x02\x02\x02A@\x03\x02\x02\x02BC\x03\x02\x02\x02CA\x03\x02"+
		"\x02\x02CD\x03\x02\x02\x02DE\x03\x02\x02\x02EF\b\x07\x02\x02F\x0E\x03"+
		"\x02\x02\x02GI\t\x03\x02\x02HG\x03\x02\x02\x02IJ\x03\x02\x02\x02JH\x03"+
		"\x02\x02\x02JK\x03\x02\x02\x02KL\x03\x02\x02\x02LM\b\b\x02\x02M\x10\x03"+
		"\x02\x02\x02NO\x07f\x02\x02OP\x07g\x02\x02PQ\x07h\x02\x02Q\x12\x03\x02"+
		"\x02\x02RS\x07k\x02\x02ST\x07h\x02\x02T\x14\x03\x02\x02\x02UV\x07g\x02"+
		"\x02VW\x07n\x02\x02WX\x07u\x02\x02XY\x07g\x02\x02Y\x16\x03\x02\x02\x02"+
		"Z[\x07k\x02\x02[\\\x07u\x02\x02\\\x18\x03\x02\x02\x02]^\x07c\x02\x02^"+
		"_\x07y\x02\x02_`\x07c\x02\x02`a\x07k\x02\x02ab\x07v\x02\x02b\x1A\x03\x02"+
		"\x02\x02cd\x07c\x02\x02de\x07p\x02\x02ef\x07f\x02\x02f\x1C\x03\x02\x02"+
		"\x02gh\x07q\x02\x02hi\x07t\x02\x02i\x1E\x03\x02\x02\x02jk\x07]\x02\x02"+
		"k \x03\x02\x02\x02lm\x07_\x02\x02m\"\x03\x02\x02\x02no\x07*\x02\x02o$"+
		"\x03\x02\x02\x02pq\x07+\x02\x02q&\x03\x02\x02\x02rs\x07}\x02\x02s(\x03"+
		"\x02\x02\x02tu\x07\x7F\x02\x02u*\x03\x02\x02\x02vw\x07?\x02\x02w,\x03"+
		"\x02\x02\x02x~\x07$\x02\x02yz\x07^\x02\x02z}\x07$\x02\x02{}\n\x04\x02"+
		"\x02|y\x03\x02\x02\x02|{\x03\x02\x02\x02}\x80\x03\x02\x02\x02~|\x03\x02"+
		"\x02\x02~\x7F\x03\x02\x02\x02\x7F\x81\x03\x02\x02\x02\x80~\x03\x02\x02"+
		"\x02\x81\x82\x07$\x02\x02\x82.\x03\x02\x02\x02\x83\x85\x07/\x02\x02\x84"+
		"\x83\x03\x02\x02\x02\x84\x85\x03\x02\x02\x02\x85\x87\x03\x02\x02\x02\x86"+
		"\x88\t\x05\x02\x02\x87\x86\x03\x02\x02\x02\x88\x89\x03\x02\x02\x02\x89"+
		"\x87\x03\x02\x02\x02\x89\x8A\x03\x02\x02\x02\x8A0\x03\x02\x02\x02\x8B"+
		"\x8F\t\x06\x02\x02\x8C\x8E\t\x07\x02\x02\x8D\x8C\x03\x02\x02\x02\x8E\x91"+
		"\x03\x02\x02\x02\x8F\x8D\x03\x02\x02\x02\x8F\x90\x03\x02\x02\x02\x902"+
		"\x03\x02\x02\x02\x91\x8F\x03\x02\x02\x02\n\x02CJ|~\x84\x89\x8F\x03\b\x02"+
		"\x02";
	public static __ATN: ATN;
	public static get _ATN(): ATN {
		if (!ArubickLexer.__ATN) {
			ArubickLexer.__ATN = new ATNDeserializer().deserialize(Utils.toCharArray(ArubickLexer._serializedATN));
		}

		return ArubickLexer.__ATN;
	}

}

