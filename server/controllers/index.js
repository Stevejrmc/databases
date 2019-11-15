var models = require('../models');

module.exports = {
  messages: {
    get: function (req, res) {
      models.messages.get((err, messages) => {
        if (err) {
          throw (err);
        }
        res.json(messages);
      });
    }, // a function which handles a get request for all messages
    post: function (req, res) {
      var queryArgs = [req.body.text, req.body.username, req.body.roomname];
      models.messages.post(queryArgs, (err, message) => {
        if (err) {
          throw (err);
        }
        res.sendStatus(201);
      });
    } // a function which handles posting a message to the database
  },

  users: {
    // Ditto as above
    get: function (req, res) {
      models.users.get((err, users) => {
        if (err) {
          throw (err);
        }
        res.json(users);
      });
    },
    post: function (req, res) {
      var queryArgs = [req.body.username];
      models.users.post(queryArgs, (err, users) => {
        if (err) {
          throw (err);
        }
        res.sendStatus(201);
      });
    }
  }
};
