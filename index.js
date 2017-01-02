"strict mode";
var antlr4 = require('antlr4');
console.log(process.cwd());
var tsqlLexer = require('./lib/tsqlLexer');
var tsqlParser = require("./lib/tsqlParser");
var tsqlListener = require("./lib/tsqlListener");
var customListener = new tsqlListener.tsqlListener();
customListener.enterTsql_file = (ctx) => {
  if(ctx && ctx.constructor && ctx.constructor.name) console.info("from %s", ctx.constructor.name);
  if(ctx || ctx.children || ctx.children.length > 0) {
    console.info("children: ", ctx.children.join(', '));
  }   
  console.info("enterTsql_file ");	    
};
customListener.enterSelect_statement = (ctx) => {
  console.info("enterSelect_statement");
};

module.exports = {
  format: function (sql) {
    var chars = new antlr4.InputStream(sql);
    var lexer = new tsqlLexer.tsqlLexer(chars);
    var tokens = new antlr4.CommonTokenStream(lexer);
    var parser = new tsqlParser.tsqlParser(tokens);
    var formattedSql = "";
    parser.buildParseTrees = true
    var tree = parser.tsql_file();
    antlr4.tree.ParseTreeWalker.DEFAULT.walk(customListener, tree);
    return formattedSql;
  }
};