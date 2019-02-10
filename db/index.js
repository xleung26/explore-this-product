const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/exploreProducts');
const mockarooData = require('../data.js');

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error to db'));
db.once('open', () => {console.log('connected to db')});

const exploresSchema = new mongoose.Schema({
  myid: {type: Number},
  image: {type: String},
  headerComment : {type: String},
  comments: {type: String},
  date: {type: Date},
  productBrand: {type: String}
})

const videosSchema = new mongoose.Schema({
  video: {type: String},
  videoTitle: {type: String}
})

const articlesSchema = new mongoose.Schema({
  image: {type: String}
})

const Explores = mongoose.model('Explores', exploresSchema);

const Videos = mongoose.model('Videos', videosSchema);

const Articles = mongoose.model('Articles', articlesSchema);

function adjust (array, url) {
  for (let i = 0; i < array.length; i++) {
    array[i].image = url;
  }
  return array;
}

let adjustedData = adjust(mockarooData.mockarooData, 'https://picsum.photos/420/420/?random')


let saveExplore = (data) => {
  data.forEach(entry => {
    entry = new Explores ({
      myid: entry.myid,
      image: entry.image,
      headerComment : entry.headerComments,
      comments: entry.comments,
      date: entry.date,
      productBrand: entry.productBrand
    }).save()
    .then(() => {console.log('success in storing data into Explore table')})
    .catch(() => {console.log('failed to insert data into Explore table')})
  })
}

let saveArticle = (data) => {
  data.forEach(entry => {
    entry = new Articles({
      image: entry.image
    }).save()
    .then(() => {console.log('success in storing data into Ariticle table')})
    .catch(() => {console.log('failed to insert data into Article table')})
  })
}

let saveVideos = (data) => {
  data.forEach(entry => {
    entry = new Videos({ 
      video: entry.video,
      videoTitle: entry.videoTitle}).save()
      .then(() => { console.log('success in storing data in Videos table') })
      .catch(() => { console.log('failed to insert data into Videos table')})
  })
}

var randomID = () => {
  let arr = [];
  for (let i = 0; i < 6; i++){
    arr.push(Math.floor(600*Math.random()));
  }
  return arr;
}

let store = randomID();
console.log(store);

//   

let fetchExplore = (callback) => {
  Explores.find({myid: { $in: randomID()}}).limit(6)
  .then((data) => {
    console.log('success in fetchExplore')
    callback(null, data);
  })
  .catch((err) => {
    console.log('failure in fetchExplore')
    callback(err, null);
  })
}

let fetchArticle = () => {
  Articles.find({ _id: { $in: randomID()}}).limit(1)
  .then((data) => {
    console.log('success in fetchArticles')
    callback(null, data);
  })
  .catch(() => {
    console.log('failure in fetchArticles')
    callback(err, null);
  })  
} 

let fetchVideos = () => {
  Videos.find({})
  .then((data) => {
    console.log('success in fetchVideos')
    callback(null, data);
  })
  .catch(() => {
    console.log('failure in fetchVideos')
    callback(err, null);
  })  
}

// 'https://picsum.photos/148/132/?random'

// for (let i = 0; i <100; i++) {
//   saveArticle([{image: 'https://picsum.photos/148/132/?random'}])
// }

// saveVideos([{
//   video: 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4',
//   videoTitle: 'Very funny bunny video'
// }])
// http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4

// saveExplore(adjustedData, 'https://picsum.photos/148/132/?random');

module.exports = { saveExplore , saveArticle, saveVideos, fetchExplore, fetchArticle, fetchVideos };