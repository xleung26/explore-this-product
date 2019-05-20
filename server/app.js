const express = require('express');
const path = require('path');
const parser = require('body-parser');
const morgan = require('morgan');
const controller = require('./controller.js');

const model = require('../db/model.js');
const db = require('../db/index.js');

const app = express();

app.use(morgan('dev'));
app.use(parser.json());
app.use(parser.urlencoded({ extended: true }));

app.use(express.static(path.resolve(__dirname, '../public')));

app.get('/explores/:id', controller.explores.get);

module.exports = app;