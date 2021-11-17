// get env variables
require('dotenv').config();
// import packages
const express = require('express');
const router = express.Router();
const axios = require('axios');

// Get a list of characters
router.get('/characters', async (req, res) => {
  try {
    const response = await axios.get(
      `https://lereacteur-marvel-api.herokuapp.com/characters?apiKey=${process.env.MARVEL_API_KEY}`
    );
    res.json(response.data);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

module.exports = router;
