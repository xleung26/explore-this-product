const express = require('express');
const path = require('path');
const parser = require('body-parser');
const controller = require('./controller.js');
const PORT = 3005;
const db = require('../db/index.js');

const app = express();

app.use(parser.json());
app.use(parser.urlencoded({extended: true}));

app.use(express.static(path.resolve(__dirname, '../public')));

app.get('/explores', controller.explores.get);

app.get('/videos', controller.videos.get);

app.get('/articles', controller.articles.get);

app.listen(PORT, () => console.log('the server is listening on ', PORT));

// jest

// FEC front end - 
//what we learned in the FEC journal
// career week, running, prep, public repos, this is what they will see. write read mes for public, commits, this is wat they will read. 
//journals wrote what was the most challenging aspect. 
// FEC flexbox for css,
// areas to spend more time on vs less time on, seeding the data in fec, 
// deployed and seeded after week one. css html. trial error, google, 
//ci tool travis ci 
// implement a few test, TDD BDD 3 -4 or test

// work on side projects, and learn other framework
// lots of testing, new relic 
//cloud testing, io, no local testing,
// push out of comfort zone
// get to the next level, dont rely on prebuilt
// FEC responsive, google it, 

// office hours