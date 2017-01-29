const antlr4 = require('antlr4');
const AntlrLexer = require('./AntlrGenerated/tsqlLexer').tsqlLexer;
const AntlrParser = require("./AntlrGenerated/tsqlParser").tsqlParser;
const CustomListener = require("./CustomParseListener").CustomParseListener;
const InputStream = antlr4.InputStream;
const CommonTokenStream = antlr4.CommonTokenStream;

module.exports = {
  format(sql) {
    if (!(typeof sql === "string")) {
      throw new Error("function format() requires parameter of type String. Found " + typeof sql);
    }

    const chars = new InputStream(sql);
    const lexer = new AntlrLexer(chars);
    const tokens = new CommonTokenStream(lexer);
    const parser = new AntlrParser(tokens);

    parser.buildParseTrees = true;
    const tree = parser.tsql_file();
    const listener = new CustomListener();

    listener.parser = parser;
    antlr4.tree.ParseTreeWalker.DEFAULT.walk(listener, tree);

    return listener.getFormattedText();
  }
};