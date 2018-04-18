// Server root

// Imports
const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

// Models
const User = require('./model/user');

/* Test records (invoke mongo)
db.createCollection('user');
db.user.insert({
  name: 'roy agasthyan',
  username: 'roy',
  password: '123'
});*/

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
  mongoose.connect(url,{ useMongoClient: true } ,function(err){
    if(err) throw err;
    User.find({
      username: req.body.username, password: req.body.password
    }, function(err, user){
      if(err) throw err;
      if(user.length === 1){
        return res.status(200).json({
          status: 'success',
          data: user
        })
      } else {
        return res.status(200).json({
          status: 'fail',
          message: 'Login failed'
        })
      }
    })
  });
});

app.listen(3000, () => console.log('Blog server running on port 3000'));
