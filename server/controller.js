const db = require('../db/index.js');

module.exports = {
  explores: {
      get: (req, res) => {
        let { id } = req.params;
        
        db.fetchExplore(id, (err, data) => {
              if (err) {
                  res.status(404).send()
              } else {
                  res.status(200).send(data);
              }
          })
      }
  }

}