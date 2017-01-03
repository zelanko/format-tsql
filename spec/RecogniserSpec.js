describe("Format the simplest SQL", () => {
  var expected,
    formatter,
    incoming;

  incoming = 'select A as [Yuba dubba]';
  expected = 'SELECT A AS [Yuba dubba];';
  formatter = require('../index');

  it("has a format function", () => {
    expect(formatter).not.toBeUndefined();
    expect(formatter.format).not.toBeUndefined();
    expect(typeof formatter.format).toEqual("function");
  });

  it(`Formats '${incoming}' as '${expected}'`, () => {
    var formattedSql = formatter.format(incoming);
    expect(formattedSql).not.toBeUndefined();
    expect(formattedSql).not.toBeNull();
    expect(formattedSql).toEqual(expected);
  });
});