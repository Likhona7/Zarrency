var express = require('express');
var bodyParser = require('body-parser');
var handlebars = require("handlebars");
var CommissionJunction = require("CommissionJunction");

var exphbs = require('express-handlebars');
var app = express();

app.engine('handlebars', exphbs({
  defaultLayout: 'main'
}));


app.set('view engine', 'handlebars');
app.use(express.static(__dirname + '/public'));






var CJ = new CommissionJunction({
  websiteId: '123456',
  developerKey: '00b29ab4700d9e34fd57cd0f077d900377e12d3eaacd685988fbaa7bce619081fb954744fa2ef63a5cc271b7b2d1727b30e34bb4eb15e6ffa21a028494d1a6133f/3a2a35bf144044a388d78820795cd0345749e3d1be29509752d6579183a68b1db5f920fbb88f3c5947ab78debcbf354e1c2254c0179521b0935a4e9e52662919'
})
console.log(CJ);


app.set('port', (process.env.PORT || 5000));
  //start the app like this:
  app.listen(app.get('port'), function() {
    console.log('Node app is running on port', app.get('port'));
  });
