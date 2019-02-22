const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/exploreProducts', {useNewUrlParser: true});
const mockarooData = require('../data.js');

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error to db'));
db.once('open', () => {console.log('connected to db')});

const exploresSchema = new mongoose.Schema({
  productId: {type: Number, unique: true},
  exploresLists: {type: Array, unique: true},
  videosLists: {type: Array, unique: true},
  articlesLists: {type: Array, unique: true}
})


const Explores = mongoose.model('Explores', exploresSchema);


let saveExplore = (data) => {
  data.forEach(entry => {
    entry = new Explores ({
      productId: entry.id,
      exploresLists: entry.explores,
      videosLists: entry.videos,
      articlesLists: entry.articles
    }).save()
    .then(() => {console.log('success in storing data into Explores table')})
    .catch(() => {console.log('failed to insert data into Explores table')})
  })
}

let fetchExplore = (id, callback) => {
  Explores.find({productId: id})
  .then((data) => {
    console.log('success in fetchExplore')
    callback(null, data);
  })
  .catch((err) => {
    console.log('failure in fetchExplore')
    callback('err', null);
  })
}


function adjust (array, url) {
  for (let i = 0; i < array.length; i++) {
    array[i].image = url + (Math.floor(Math.random() * 1000));
  }
  return array;
}

let adjustedData = adjust(mockarooData.mockarooData, 'https://picsum.photos/420/420/?image=')


function formatData (array) {
  let newArr = [];
  // for loop to create the 100 product list
  for (let i = 1; i <= 100; i++){
    let newObj = { id: i, explores: [], videos: [], articles: []}
    // tracker to prevent duplicate dummy data
    let trackerObj = {}
    // randomize the length of the array of each product
    let arrayLengthGenerator = (Math.max(Math.floor(Math.random() * 30), 6))
    // for loop to create the explores array of randomized dummy data (which is the array passed in)
    for (let k = 0; k < arrayLengthGenerator; k++){
      // random is used to randomize the data grabbed from dummy data (600 of them) 
      let random = Math.floor(Math.random() * 600)
      if(!trackerObj[random]){
        trackerObj[random] = random;
        newObj.explores.push( array[random] )
      }
    }

    videosList = []
    //for loop to make the videos array
    for (let k = 0; k < Math.max(Math.floor(Math.random() * 10), 2); k++) {
      videosList.push( "https://www.youtube.com/embed/jI1jswMZB3E" )
    }
    newObj.videos.push({ videoTitle: 'Get Unready With Me: Anti Aging Routine for Dry Skin', videosList: videosList})
    //for loop to make the article array
    newObj.articles.push({image: 'https://picsum.photos/148/132/?image=' + (Math.floor(Math.random() * 1000)), title: "Dummy Title"} )

    newArr.push(newObj);
  }
  return newArr;
}


let dataArr = formatData(adjustedData);

// console.log(dataArr[0])


saveExplore(dataArr);

module.exports = { exploresSchema, saveExplore, fetchExplore};