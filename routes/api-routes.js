const db = require('../models/Message')

module.exports = function (app){
    
    app.get('/all-messages', function (req,res){
        db.find({})
        .then(function(data){
            console.log(data)
            res.json(data);
        })
        .catch(function (err){
            res.json(err);
        });
    });

    app.post('/new-msg', function (req, res) {
        db.create(req.body)
          .then(function (data) {
            console.log(data)
            res.json(data);
          });
      });
}