
module.exports.examples = [
  {
    "incoming": 'select A as [Yuba dubba]',
    "expected": 'SELECT A AS [Yuba dubba];'
  },
  {"incoming": 'select Column1, Column2 from ATable at', "expected": "SELECT Column1,\n  Column2\nFROM ATable at;"},
  {"incoming": 'SELECt all top 1 column1 from mYtAble at', "expected": 'SELECT ALL TOP 1 column1\nFROM mYtAble at;'}
];