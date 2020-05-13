const express = require('express');

const path = require('path');

const exphbs = require('express-handlebars');

const app = express();

app.engine('handlebars', exphbs());
app.set('view engine', 'handlebars');

app.use(express.static('public'));

app.get('/home', function (request, response) {
    response.sendFile(path.join(__dirname, '/public/index.html'));
  });

app.listen(3000, function () {
    console.log('servidor iniciado');
  });