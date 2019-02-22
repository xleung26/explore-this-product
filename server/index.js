const express = require('express');
const path = require('path');
const parser = require('body-parser');
const controller = require('./controller.js');
const PORT = 3005;
const model = require('../db/model.js');
const db = require('../db/index.js');

const app = express();

app.use(parser.json());
app.use(parser.urlencoded({extended: true}));

app.use(express.static(path.resolve(__dirname, '../public')));

app.get('/explores/:id', controller.explores.get);
// app.get('/explores/id', controller.explores.getid);

// app.get('/videos', controller.videos.get);

// app.get('/articles', controller.articles.get);

app.listen(PORT, () => console.log('the server is listening on ', PORT));
