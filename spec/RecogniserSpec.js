"use strict";

const tsqlFormatModule = require('../index');

const tests = [
  ['Select one column with alias', 'select A as [Yuba dubba]', 'SELECT A AS [Yuba dubba];'],
  ['Casing, column alias, column per line.', 'sElEct A, B C', 'SELECT A,\n  B AS C;']
];

describe("import/require yields expected module.",
  () => {
    it("has a format function",
      () => {
        expect(tsqlFormatModule).not.toBeNull();
        expect(tsqlFormatModule).toBeDefined();
        expect(tsqlFormatModule.format).not.toBeNull();
        expect(tsqlFormatModule.format).toBeDefined()
        expect(typeof tsqlFormatModule.format).toBe("function");
      }
    );
  }
)

const format = tsqlFormatModule.format;

describe("Format Basic SELECT",
  () => {
    tests.forEach(
      (testSpec) => {
        let testCase = testSpec[0];
        let original = testSpec[1];
        let expected = testSpec[2];
        it(testCase,
          () => {
            var formattedSql = format(original);
            expect(formattedSql).toBeDefined();
            expect(formattedSql).not.toBeNull();
            expect(formattedSql).toBe(expected);
          }
        );
      }
    );
  }
);