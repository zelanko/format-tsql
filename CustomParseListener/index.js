const TerminalNode = require("antlr4").tree.terminalNode;

const AntlrParseListener = 
  require("../AntlrGenerated/tsqlListener").tsqlListener;

class CustomParseListener extends AntlrParseListener {
  constructor() {
    super();
    this.outgoingValue = [];
    this.currentLine = [];
    this.indentDepth = 0;
    this.indentString = '  ';
    this.parser = null;
  }

  newOutputLine() {
    this.outgoingValue.push(this.currentLine);
    this.currentLine = [];
  }

  indent() {
    return this.INDENT_STRING * this.indentDepth
  }

  getFormattedText() {
    this.outgoingValue.forEach(
      (element, index, array) => {
        array[index] = element.join(' ');
      }
    );

    return this.outgoingValue.join("\n");
  }

  // eslint-disable-next-line camelcase, no-unused-vars
  exitQuery_specification(ctx) {

/* The problem now is how to handle things in the right order.
   if we act onexit, our parse can spit out terminals.
   but how do i wait for an expression to render with terminals on both sides .
   IE. SELECT TOP(1+1+1) PERCENT 'Xxx' AS Xxx FROM ATableWithThreeOrMoreRows.
   this spits out SELECT TOP PERCENT ...

   I think I first need decend to left leaves before decending rightward siblings. 
   Perhaps there is a walker provided.
   Context objects will contain formatted output. only implement exit listeners.
   Then the ExpressionContext provides '(1 + 1 + 1)' without having to decend into children.
   I think this means we render from the bottom of the tree up. And every context need only look at the "output" of children.
    */


    for (const index in ctx.children) {
      if (ctx.children[index] instanceof TerminalNode.prototype) {
        const terminalNode = ctx.children[index];

        switch (terminalNode.symbol.type) {
          case tsqlParser.SELECT:
        }
        this.currentLine.push(this.parser.symbolicNames[terminalNode.symbol.type]);
      }
    }
    // Always starts with SELECT but why not use the parsetree to determine the terminal?
    this.currentLine.push("SELECT");


    /* Handle other than select_list. (Add exitSelect_list) */
  }

  exitSelect_list(ctx) {
    
  }
  
  // eslint-disable-next-line camelcase, no-unused-vars
  exitDml_clause(ctx) {
    let lastToken = this.currentLine.pop();

    if (typeof lastToken !== "undefined") {
      if (!lastToken.endsWith(';')) {
        lastToken += ';';
      }
      this.currentLine.push(lastToken)
    }
  }

  // exitSimple_id(ctx) {
  //   if(ctx.children[0].constructor.name==="TerminalNodeImpl") {
  //     const terminalNode = ctx.children[0];
  //     this.currentLine.push(terminalNode.symbol.source[1].strdata.substring(terminalNode.symbol.start,terminalNode.symbol.stop+1));
  //   }
  // }

  // exitSelect_list_elem(ctx) {
  //   this.currentLine.push(`${ctx.parser.symbolicNames[ctx.children[1].symbol.type]} `);
  //   this.currentLine.push(ctx.children[2].getText());
  // }

  visitTerminal(node) {
    const parse = this.parser;

    switch (node.symbol.type) {
      case parse.AND:
      case parse.ALTER:
      case parse.SELECT:
      case parse.CASE:  
        node.outputString = this.parser.symbolicNames[node.symbol.type];
        break;
      default:
    }
  }

  visitErrorNode(node) {
  }

  enterEveryRule(node) {
  }

  exitEveryRule(node) {
  }
}
module.exports.CustomParseListener = CustomParseListener;