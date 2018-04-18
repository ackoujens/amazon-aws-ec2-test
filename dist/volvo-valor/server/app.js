// Server root
const express = require('express');
const app = express();

app.get('/api/user/login', (req, res) => {
  res.send('Server working!')
})

app.listen(3000, () => console.log('Blog server running on port 3000'));
