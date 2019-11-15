var db = require('../db');

module.exports = {
  messages: {
    get: function (callback) {
      var queryString = 'SELECT * FROM Messages';
      db.query(queryString, (err, messages) => {
        if (err) {
          callback(err);
        }
        callback(null, messages);
      });
    }, // a function which produces all the messages
    post: function (queryArgs, callback) {
      var queryString = 'INSERT INTO Messages (text, username, roomname) VALUES (?, ?, ?)';
      db.query(queryString, queryArgs, (err, result) => {
        if (err) {
          callback(err);
        }
        callback(null, result);
      });
    } // a function which can be used to insert a message into the database
  },

  users: {
    // Ditto as above.
    get: function (callback) {
      var queryString = 'SELECT * FROM Users';
      db.query(queryString, (err, users) => {
        if (err) {
          callback(err);
        }
        callback(null, users);
      });
    },
    post: function (queryArgs, callback) {
      var queryString = 'INSERT INTO Users (username) VALUES (?)';
      db.query(queryString, queryArgs, (err, result) => {
        if (err) {
          callback(err);
        }
        callback(null, result);
      });
    }
  }
};
