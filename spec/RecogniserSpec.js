describe("Format SQL", () => {
  "use strict";
  let formatter = require('../index');
  let testFormat = function (incoming, expected) {
    it(`Formats '${incoming}' as '${expected}'`, () => {
      expect(incoming).toBeDefined();
      let formattedSql = formatter.format(incoming);
      expect(formattedSql).not.toBeUndefined();
      expect(formattedSql).not.toBeNull();
      expect(formattedSql).toEqual(expected);
    });
  }
  describe("Basic formatter validation", () => {
    "use strict";
    it("has a format function", () => {
      expect(formatter).not.toBeUndefined();
      expect(formatter.format).not.toBeUndefined();
      expect(typeof formatter.format).toEqual("function");
    });
  });
  describe("Format the SQL cases", () => {
    "use strict";
    let testCases = require('./sql-examples').examples;
    for(let i = 0; testCases.length > i; i += 1) {
      let incoming = testCases[i].incoming;      
      let expected = testCases[i].expected;
      testFormat(incoming, expected);
    }
  });
});

//   incoming = 'select Column1, Column2 from ATable at';
//   expected = 
// `SELECT Column1,
//   Column2
// FROM ATable at`;

//   it(`Formats \n${incoming}\nas\n${expected}`, () => {
//     var formattedSql = formatter.format(incoming);
//     expect(formattedSql).not.toBeUndefined();
//     expect(formattedSql).not.toBeNull();
//     expect(formattedSql).toEqual(expected);
//   });