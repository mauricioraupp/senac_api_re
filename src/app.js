const express = require('express');
const app = express();
const router = require('./routes/rotas');
require('dotenv').config();

app.set('port', process.env.PORT || 3333);
app.use('/api', router);

module.exports = app;