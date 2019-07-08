var express 	= require('express');
var app			= express();
var connect 	= require('connect');

app.use(connect.static(__dirname + '/public'));
app.use(connect.logger('dev'));
app.use(connect.json());
app.use(connect.urlencoded());

require('./routes/routeTable')(app);

app.listen(3001);

app.post('/sum', (req, res) => {
  let val1 = +req.body.val1;
      let val2 = +req.body.val2;
      let result = {
        result: val1+val2
      }
      return res.send(JSON.stringify(result));

});