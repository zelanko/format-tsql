"use strict";

const antlr4 = require('antlr4');
const InputStream = antlr4.InputStream;
const CommonTokenStream = antlr4.CommonTokenStream;
const tsqlLexer = require('./lib/tsqlLexer').tsqlLexer;
const tsqlParser = require("./lib/tsqlParser").tsqlParser;
const tsqlListener = require("./lib/tsqlListener").tsqlListener;

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
    this.outgoingValue.forEach((element, index, array) => array[index] = element.join(" "));
    return this.outgoingValue.join("\n");
  }
  
  exitQuery_specification(ctx) {
    this.currentLine.push("SELECT");

    let tALL = ctx.ALL();
    if (tALL) {
      this.currentLine.push("ALL");
    }

    let tTOP = ctx.TOP();
    if (tTOP) {
      this.currentLine.push("TOP");
    }

    let selectList = ctx.select_list().select_list_elem();

    let indent = "";
    selectList.forEach(
      (value, index, array) => {
        let columnDef = value.expression().getText();

        if (indent === " ") {
          this.currentLine.push(indent, columnDef);
        }
        else {
          this.currentLine.push(columnDef);
          indent = " ";
        }

        let aliasCxt = value.column_alias();        
        if (aliasCxt) {
          this.currentLine.push("AS", aliasCxt.getText());
        }

        if (index !== array.length - 1) {
          this.currentLine.push(this.currentLine.pop() + ",");
          this.newOutputLine();
        }
      }  
    );

    this.currentLine.push(this.currentLine.pop()+";");
  }
}

const parse = function(sql) {
  const chars = new InputStream(sql);
  const lexer = new tsqlLexer(chars);
  const tokens = new CommonTokenStream(lexer);
  const parser = new tsqlParser(tokens);

  return parser.tsql_file();
}

const DEFAULT = antlr4.tree.ParseTreeWalker.DEFAULT;

module.exports = {
  format: function (sql) {
    const tree = parse(sql);
    const listener = new CustomListener();

    DEFAULT.walk(listener, tree);

    return listener.getFormattedText();
  }
};