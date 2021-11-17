// get env variables
require('dotenv').config();
// import packages
const express = require('express');
const formidable = require('express-formidable');
const cors = require('cors');

// allowing the interpretation of post messages
const app = express();
app.use(cors());
app.use(formidable());

// import of routes
const comicsRoutes = require('./routes/comics');
app.use(comicsRoutes);
const characterRoutes = require('./routes/character');
app.use(characterRoutes);

app.get('/', (req, res) => {
  res.json({ message: 'BIENVENUE !' });
});
// 404
app.all('*', (req, res) => {
  res.status(404).json({ message: 'Page not found' });
});

// Server started
app.listen(process.env.PORT, () => {
  console.log('server started');
});
