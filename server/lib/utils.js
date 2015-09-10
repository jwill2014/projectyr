var bcrypt = require('bcrypt-nodejs');
var Promise = require('bluebird');
var db = require('./db')

module.exports = {



// encryption to be called everytime a user logs in or signs up

hashPassword : function(user, password){
    var cipher = Promise.promisify(bcrypt.hash);
    return cipher(password, null, null).bind(user)
      .then(function(hash) {
        return hash;
      });
  }

}


