grammar Arubick;

WS
  : [ \t]+ -> skip
  ;

EOL
  : [\r\n]+ -> skip
  ;

DEF
  : 'def'
  ;

IF
  : 'if'
  ;

ELSE
  : 'else'
  ;

IS
  : 'is'
  ;

AWAIT
  : 'await'
  ;

AND
  : 'and'
  ;

OR
  : 'or'
  ;

LBRACKET
  : '['
  ;

RBRACKET
  : ']'
  ;

LPARENT
  : '('
  ;

RPARENT
  : ')'
  ;

LSCOPE
  : '{'
  ;

RSCOPE
  : '}'
  ;

ASSIGN
  : '='
  ;

STRING
  : '"' ('\\"' | ~ ["\\])* '"'
  ;

NUMBER
  : '-'? [0-9]+
  ;

ID
  : [A-Za-z][A-Za-z0-9]*
  ;

storage
  : ID '/' ID
  ;

defStorage
  : DEF storage
  ;

variable
  : ID
  ;

defVariable
  : DEF variable
  ;

accessVariable
  : variable ('.' variable)+
  ;

assign
  : storage ASSIGN expression
  | defStorage ASSIGN expression
  | variable ASSIGN expression
  | defVariable ASSIGN expression
  ;

methodParameters
  : expression (',' expression)*
  ;

methodCall
  : AWAIT? storage LPARENT methodParameters? RPARENT
  | AWAIT? variable LPARENT methodParameters? RPARENT
  ;

comparison
  : variable IS (expression|storage)
  ;

expression
  : STRING
  | NUMBER
  | variable
  | accessVariable
  | methodCall
  | array
  ;

array
  : LBRACKET expression  (',' expression)* RBRACKET
  ;

elseStatement
  : ELSE LSCOPE statement* RSCOPE
  ;

ifStatement
  : IF comparison ((AND|OR) comparison)* LSCOPE statement* RSCOPE elseStatement?
  ;

statement
  : assign
  | methodCall
  | ifStatement
  ;

botDefinition
  : ID ':' NUMBER ('.' NUMBER)*
  ;

main
  : 'main' LSCOPE statement* RSCOPE
  ;

program
  : botDefinition statement* main
  ;