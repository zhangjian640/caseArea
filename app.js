var express = require("express");
var app = express();


var link = require('./link.json')

var apiRouter = express.Router()
apiRouter.post('/link', function (req, res) {
  res.json(link)
})
app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});
app.use('/api', apiRouter)

app.use("/", express.static(__dirname + "/src"));
app.listen(8080, () => {
  console.log('Server Running At 8080');
});