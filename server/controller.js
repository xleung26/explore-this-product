const db = require('../db/index.js');

module.exports = {
  explores: {
      get: (req, res) => {
          db.fetchExplore((err, data) => {
              if (err) {
                  res.status(404).send()
              } else {
                  res.status(200).send(data);
              }
          })
      },

      getid: (req, res) => {
        const { id } = req.query;
        db.fetchExploreId(id, (err, data) => {
            if (err) {
                res.status(404).send()
            } else {
                res.status(200).send(data);
            }
        })
      }
  },
  videos: {
      get: (req, res) => {
          db.fetchVideos((err, data) => {
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
          db.saveArticle((err, data) => {
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