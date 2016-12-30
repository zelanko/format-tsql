var antlr4 = require('antlr4');
var tsqlLexer = require('./tsqlLexer');
var tsqlParser = require("./tsqlParser");
var tsqlListener = require("./tsqlListener");
var sql = "select 'a dumb value' aS aString,123 as iNtvalUE;";
var chars = new antlr4.InputStream(sql);
var lexer = new tsqlLexer.tsqlLexer(chars);
var tokens = new antlr4.CommonTokenStream(lexer);
var parser = new tsqlParser.tsqlParser(tokens);
parser.buildParseTrees = true
var tree = parser.tsql_file();
antlr4.tree.ParseTreeWalker.DEFAULT.walk(new tsqlListener.tsqlListener(), tree);