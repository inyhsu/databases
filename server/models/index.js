var db = require('../db');

module.exports = {
  messages: {
    get: function (result) {
      db.query('SELECT username, roomname, message FROM messages', (err, res) => {
        console.log(err, res, "this is the err and result")
        if (err) {
          result(err)
        } else {
          result(null, res);
        }
      })
    }, // a function which produces all the messages
    post: function (data, result) {
      db.query(`INSERT INTO messages (ID, userID, username, roomname, message) values (null, (select ID from users where users.username = "${data.username}"), (select username from users where users.username = "${data.username}"), "${data.roomname}", "${data.message}");`, (err, res) => {
        if(err) {
          result(err);
        } else {
          result("This is the one from models-messages success");
        }
      })
    } // a function which can be used to insert a message into the database
  },

  users: {
    // Ditto as above.
    get: function () {},
    post: function (name, callback) {
      //if user exists, do nothing
      //directly communicate with the database
      //accepts JSON object with username: name and outputs "message sent"
      db.query(`INSERT INTO users values (null, "${name}");`, (err, res, next) => {
        if(err){
          callback(err);
        } else {
          callback(res, "This is the one from models-users success");
        }
      })
    }
  }
};

// `INSERT INTO messages (ID, userID, roomname, message) values (?,?,?,?), [null,(select ID from users where users.username = "Valjean"), "lobby", "hi"];`