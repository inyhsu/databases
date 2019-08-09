var models = require('../models');

module.exports = {
  messages: {
    get: function (req, res) {
      models.messages.get((err, msg) => {
        console.log(err,msg, "this is the error and message")
        if(err) {
          res.send(404);

        }else {
          res.send(msg);
        }
      })
    }, // a function which handles a get request for all messages
    post: function (req, res) {
      models.messages.post(req.body, (err, result) => {
          if (err) {
            res.send(404)
          } else {
            res.send(200)
          }
        })

    } // a function which handles posting a message to the database
  },

  users: {
    // Ditto as above
    get: function (req, res) {

    },
    post: function (req, res) {
      //get the information that the router is giving and converting it into data that the model can use to give to the database
      //callback to models which takes the models method as callback, model does its thing and then gives the response of success
      // models.users.post(req.username, callback)
      // res.json("hi")
      var username=req.body.username
      models.users.post(username, (err, result) => {
        if (err) {
          res.send(404)
        }else {
          res.send(200)
        }
      })
    },
  }
};

