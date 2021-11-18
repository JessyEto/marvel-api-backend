// get env variables
require('dotenv').config();
// import packages
const express = require('express');
const router = express.Router();
const axios = require('axios');

// get the list of comics
router.get('/comics', async (req, res) => {
  try {
    // call Marvel server using API
    const response = await axios.get(
      `https://lereacteur-marvel-api.herokuapp.com/comics?apiKey=${process.env.MARVEL_API_KEY}`,
      {
        params: {
          limit: req.query.limit,
          skip: req.query.skip,
          title: req.query.title,
        },
      }
    );

    res.json(response.data);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// Get a list of comics containing a specific character
router.get('/comics/:characterId', async (req, res) => {
  try {
    // call Marvel server using API
    const response = await axios.get(
      `https://lereacteur-marvel-api.herokuapp.com/comics/${req.params.characterId}?apiKey=${process.env.MARVEL_API_KEY}`
    );
    res.json(response.data);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

module.exports = router;
