const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/exploreProducts', {useNewUrlParser: true});
const mockarooData = require('../data.js');

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error to db'));
db.once('open', () => {console.log('connected to db')});

const exploresSchema = new mongoose.Schema({
  myid: {type: Number, unique: true},
  headerComment : {type: String, unique: true},
  comments: {type: String, unique: true},
  user: {type: String, unique: true},
  date: {type: Date, unique: true},
  productBrand: {type: String, unique: true},
  image: {type: String, unique: true}
})

const videosSchema = new mongoose.Schema({
  video: {type: String, unique: true},
  videoTitle: {type: String, unique: true}
})

const articlesSchema = new mongoose.Schema({
  image: {type: String, unique: true}
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
      headerComment : entry.headerComments,
      comments: entry.comments,
      user: entry.user,
      date: entry.date,
      productBrand: entry.productBrand,
      image: entry.image
    }).save()
    .then(() => {console.log('success in storing data into Explores table')})
    .catch(() => {console.log('failed to insert data into Explores table')})
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
  for (let i = 0; i < 18; i++){
    arr.push(Math.floor(600*Math.random()));
  }
  return arr;
}

let fetchExplore = (callback) => {
  Explores.find({myid: { $in: randomID()}}).limit(18)
  .then((data) => {
    console.log('success in fetchExplore')
    callback(null, data);
  })
  .catch((err) => {
    console.log('failure in fetchExplore')
    callback('err', null);
  })
}

let fetchExploreId = (id, callback) => {
  Explores.find().where({ _id: id })
  .then((data) => {callback(null, data)})
  .catch(() => callback('err', null))
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
    callback('err', null);
  })  
}

// for (let i = 0; i <100; i++) {
//   saveArticle([{image: 'https://picsum.photos/148/132/?random'}])
// }

// saveVideos([{
//   video: 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4',
//   videoTitle: 'Very funny bunny video'
// }])

// saveExplore(adjustedData);

module.exports = { saveExplore , saveArticle, saveVideos, fetchExplore, fetchArticle, fetchVideos, fetchExploreId };