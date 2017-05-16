"use strict";

const antlr4 = require('antlr4');
const InputStream = antlr4.InputStream;
const CommonTokenStream = antlr4.CommonTokenStream;
const tsqlLexer = require('./lib/tsqlLexer').tsqlLexer;
const tsqlParser = require("./lib/tsqlParser").tsqlParser;
const tsqlListener = require("./lib/tsqlListener").tsqlListener;

const SPACE = " ";
const NEWLINE = "\n";

class CustomListener extends require("./lib/tsqlListener").tsqlListener {
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
    this.outgoingValue.forEach((element, index, array) => array[index] = element.join(SPACE));
    return this.outgoingValue.join(NEWLINE);
  }
  
  formatSelectListElements(selectList) {
    selectList.select_list_elem().forEach(
      (value, index, array) => {
        if (index !== 0) {
          this.currentLine.push(SPACE);
        }

        this.currentLine.push(value.expression().getText());

        let lastElement = !!(array.length === index + 1);
        let aliasCxt = value.column_alias();
        if (aliasCxt !== null) {
          this.currentLine.push("AS", aliasCxt.getText());
        }

        if (!lastElement) {
          this.currentLine.push(this.currentLine.pop() + ",");
          this.newOutputLine();
        }
      }
    );
  }

  formatTable_sources(table_sources) {
    table_sources.table_source().forEach(
      (table_sourceCtx, index, array) => {
        if (index !== 0) {
          this.currentLine.push(SPACE);
        }
        const x = table_sourceCtx.table_source_item_joined().table_source_item();
        const tableName = x.table_name_with_hint().table_name();
        this.currentLine.push(tableName.getText());


        let lastElement = !!(array.length === index + 1);
        if (x.as_table_alias()) {
          const alias = x.as_table_alias().table_alias().id().simple_id().ID();
          //TODO keep quotes or brackets
          this.currentLine.push(alias)
        }  
        if (!lastElement) {
          this.currentLine.push(this.currentLine.pop() + ",");
          this.newOutputLine();
        }
      }
    );
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

    this.formatSelectListElements(ctx.select_list());

    if (ctx.FROM() !== null) {
      this.newOutputLine();
      this.currentLine.push("FROM")
      this.formatTable_sources(ctx.table_sources())
    }

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