// Server root

// Imports
const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

// Settings
const url = 'mongodb://localhost/blogDb';

// Express server
const app = express();

// Returns middleware that only parses json and urlencoded
// Only looks at requests where Content-Type header matches the type option
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended : false }));

// User login - GET - retrieve resource by id
// retrieve message
app.get('/api/user/login', (req, res) => {
  res.send('Server working!')
});

// User login - POST - create a new resource
// connect to the MongoDB database
app.post('/api/user/login', (req, res) => {
  mongoose.connect(url, function(err){
    if(err) throw err;
    console.log('Connected successfully, username is ', req.body.username, ' password is ', req.body.password);
  });
});

app.listen(3000, () => console.log('Blog server running on port 3000'));
