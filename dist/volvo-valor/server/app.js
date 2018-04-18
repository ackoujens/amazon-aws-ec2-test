// Server root

// Imports
const express = require('express');
const bodyParser = require('body-parser');

// Express server
const app = express();

app.get('/api/user/login', (req, res) => {
  res.send('Server working!')
})

app.listen(3000, () => console.log('Blog server running on port 3000'));

// Returns middleware that only parses json and urlencoded
// Only looks at requests where Content-Type header matches the type option
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended : false }));
