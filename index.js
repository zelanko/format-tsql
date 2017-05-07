"strict mode";
var antlr4 = require('antlr4');
var InputStream = antlr4.InputStream;
var CommonTokenStream = antlr4.CommonTokenStream;
var tsqlLexer = require('./lib/tsqlLexer').tsqlLexer;
var tsqlParser = require("./lib/tsqlParser").tsqlParser;
var tsqlListener = require("./lib/tsqlListener").tsqlListener;

class CustomListener extends tsqlListener {
  constructor() {
    super();
    this.outgoingValue = [[]];
    this.currentLine = this.outgoingValue[0]
  }

  newOutputLine() {
    this.currentLine = [];
    this.outgoingValue.push(this.currentLine);
  }

  getFormattedText() {
    this.outgoingValue.forEach((element, index, array) => array[index] = element.join(''));
    return this.outgoingValue.join("\n");
  }

  enterSelect_statement(ctx) {
    this.currentLine.push("SELECT ");
  }

  exitSelect_statement(ctx) {
    this.currentLine.push(";");
  }

  enterSimple_id(ctx) {
    this.currentLine.push(`${ctx.children[0].getText()} `);
  }

  exitSelect_list_elem(ctx) {
    this.currentLine.push(`${ctx.parser.symbolicNames[ctx.children[1].symbol.type]} `);
    this.currentLine.push(ctx.children[2].getText());
  }
}

module.exports = {
  format: function (sql) {
    var chars = new InputStream(sql);
    var lexer = new tsqlLexer(chars);
    var tokens = new CommonTokenStream(lexer);
    var parser = new tsqlParser(tokens);
    var listener = new CustomListener();
    parser.buildParseTrees = true;
    var tree = parser.tsql_file();
    antlr4.tree.ParseTreeWalker.DEFAULT.walk(listener, tree);
    return listener.getFormattedText();
  }
};