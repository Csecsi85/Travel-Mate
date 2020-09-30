const express = require('express');
const morgan = require('morgan');
const cors = require('cors');

module.exports = (app) => {
  app.use(cors());
  app.use(morgan('common'));
  app.use(express.json());
  app.use(express.json({ extended: false }));

  app.get('/', (req, res) => {
    res.send('API running');
  });
};
