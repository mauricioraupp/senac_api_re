const express = require('express');
const app = express();
const router = require('./routes/rotas');
const studentsController = require('./routes/studentsRouter')
require('dotenv').config();

app.set('port', process.env.PORT || 3333);
app.use('/api', router);
app.use('/api' , alunosRouter);

module.exports = app;