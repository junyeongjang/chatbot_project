var express = require('express');
var User = require('../models').chat;

var router = express.Router();

router.get('/', function(req, res, next) {
  User.findAll()
    .then((chat) => {
      console.log("여기까찌");
      res.render('main', { chats });
    })
    .catch((err) => {
      console.error(err);
      next(err);
    });
});

module.exports = router;