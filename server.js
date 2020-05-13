const MongoClient = require('mongodb').MongoClient;

const assert = require('assert');

const express = require('express');

const path = require('path');

const exphbs = require('express-handlebars');

const configureRoutes = require('./routes')

const app = express();

app.engine('handlebars', exphbs());
app.set('view engine', 'handlebars');

app.use(express.static('public'));

app.use(express.urlencoded({ extended: true }));

// Connection URL
const url = 'mongodb://localhost:27017';

// Database Name
const dbName = 'products';

// Create a new MongoClient
const client = new MongoClient(url);

// Use connect method to connect to the Server
client.connect(function(err) {
  assert.equal(null, err);
  console.log("Connected successfully to server");

  const db = client.db(dbName);

  configureRoutes(app,db);
});
app.get('/home', function (request, response) {
  response.sendFile(path.join(__dirname, '/public/index.html'));
});
app.listen(3000, function () {
    console.log('servidor iniciado');
  });