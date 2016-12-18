const ChildProcess = require('child_process');
var app = require('express')();
var bodyParser = require('body-parser');

var Formatter = {
  format(sql) {
    var childProc = ChildProcess.spawn("SqlFormat.exe", ["/h"], {"stdio": 'pipe'});
    var output;
    childProc.on("error", function(err) {
      if (err) { ~
        console.error(err);
      }
    });
    childProc.on("finish", function(err) {
      output = childProc.stdout.read();
    });
    return output;
  }
};

app.use(bodyParser.text());

app.post("/", function (req, res) {
  res.send(Formatter.format(req.body));
  res.end();
});

app.listen(8081); 