var express = require('express');
var serveStatic = require('serve-static');

var app = express();

app.use('*', (req, res, next) => {
  const query = req.query;
  if (query && query.timeout) {
    const timeout = query.timeout;
    setTimeout(() => {
      next();
    }, timeout);
  } else {
    next();
  }
});

app.use(serveStatic('.', {
  index: ['index.html', 'default.htm']}
));


app.listen(3000, () => {
  console.log('local server runs on port 3000');
});
