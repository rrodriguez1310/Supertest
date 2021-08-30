'use strict';
const mongoose = require('mongoose');
require('dotenv').config();


mongoose
  .connect(
    'mongodb://localhost:27018/docker-node-mongo', {
    useNewUrlParser: true,
    useUnifiedTopology: true
  }
  )
  .then(() => console.log('MongoDB Connected'))
  .catch(err => console.log(err));

  module.exports = mongoose;