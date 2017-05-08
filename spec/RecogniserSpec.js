"use strict";

const tsqlFormatModule = require('../index');

const tests = [
  ['select A as [Yuba dubba]', 'SELECT A AS [Yuba dubba];'],
  ['sElEct A, B C', 'SELECT A,\n  B AS C;']
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

describe("Format as expected",
  () => {
    tests.forEach(
      (testSpec) => {
        let original = testSpec[0];
        let expected = testSpec[1];
        it(`renders '${original}' as ...\n${expected}`,
          () => {
            var formattedSql = format(original);
            expect(formattedSql).not.toBeUndefined();
            expect(formattedSql).not.toBeNull();
            expect(formattedSql).toEqual(expected);
          }
        );
      }
    );
  }
);