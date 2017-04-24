const express = require('express');
const bodyParser= require('body-parser');
const MongoClient = require('mongodb').MongoClient;
const mongo = require('mongodb');
const app = express();

var db;

MongoClient.connect('mongodb://localhost:27017/Adisadb', (err, database) => {
  if(err){
    console.error(err);
  }
  db = database;
  app.listen(3000, function() {
    console.log('listening on 3000');
  });
});

// serve static assets
app.use('/client', express.static(__dirname + '/client'));

app.use(bodyParser.urlencoded({extended: true}));

app.get('/', (req, res) => {
  console.log('hey');
  res.sendFile(__dirname + '/index.html');

  console.log('WORK MF!');
  db.collection('quotes').find().toArray(function(err, results) {
    console.log(results);
  });
});

app.post('/quotes', (req, res) => {
  console.log(req.body);
  db.collection('quotes').save(req.body, (err, result) => {
    if (err) {
      return console.log(err);
    }

    console.log(req.body.name + ' said ' + req.body.quote);
    res.redirect('/');
  });
});
