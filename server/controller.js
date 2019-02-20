const db = require('../db/index.js');

module.exports = {
  explores: {
      get: (req, res) => {
        let { id } = req.query;
        
        db.fetchExplore(id, (err, data) => {
              if (err) {
                  res.status(404).send()
              } else {
                  console.log(data[0].exploresLists)
                  res.status(200).send(data[0].exploresLists);
              }
          })
      },

    //   getid: (req, res) => {
    //     const { id } = req.query;
    //     db.fetchExploreId(id, (err, data) => {
    //         if (err) {
    //             res.status(404).send()
    //         } else {
    //             res.status(200).send(data);
    //         }
    //     })
    //   }
  },
  videos: {
      get: (req, res) => {
        db.fetchVideos(id, (err, data) => {
              if (err) {
                  console.log('err in videos get')
                  res.status(404).send()
              } else {
                  console.log('success in videos get')
                  res.status(200).send(data);
              }
          })
      }
  },
  articles: {
      get: (req, res) => {
        db.saveArticle(id, (err, data) => {
              if (err) {
                  console.log('err in articles get')
                  res.status(404).send()
              } else {
                  console.log('success in articles get')
                  res.status(200).send(data)
              }
          })
      }
  }

}