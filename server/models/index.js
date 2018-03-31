// good BOILERPLATE for chrello
var db = require('../db');
// requires the DB connection

module.exports = {
  // exports an object with 2 key/value pairs, the values being objects themselves
  // each interal object has 2 functions, a get function (to get all the info) and a post function (to post new messages/users)
  messages: {
    get: function () {}, // a function which produces all the messages
    post: function () {} // a function which can be used to insert a message into the database
  },

  users: {
    // Ditto as above.
    get: function () {},
    post: function () {}
  }
};

