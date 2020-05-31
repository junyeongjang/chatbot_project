var express = require('express');
var router = express.Router();
const {Chat} = require('../models');
router.get('/', function(req, res, next) { 
  
  Chat.findAll({
    attribute:['keyword', 'story'],
    where:{id:1}
  }) 
  .then((chat) => { 
    console.log(chat);
    res.render('index', { 
      title: 'hi',
      user: chat
      });                                                                   
   }); 
});



// router.get('/', function(req, res, next) { 
//     const cont = Chat.find({where: {id:1}});
//     console.log(cont);
//     //   Chat.findAll({
//     //     where:{id:3}
//     //   }) 
//     //   .then((chat) => {
//     //     console.log(chat);
//     //     console.log(chat.content);
//     //     console.log(chat.id);
//     //     console.log(chat.keyword);
//     //     res.render('index', { 
//     //       title: 'Express', 
//     //       useremail: chat,
//     //  });
//   //  res.render('index', { title: 'Express' }); 
//   // Chat.findAll({
//   //   where:{
//   //     id:1
//   //   }
//   // });
// });


router.post('/chat-post', function(req, res, next) {
  Chat.create({
    keyword: req.body.keyword,
    story: req.body.content,
  }).
    then(() =>{
      console.log("통과");
    })
    .catch((err)=>{
      console.error(err);
      next(err);
    });

    bot2.onText(/\/start/, (msg) => {
      bot2.sendMessage(msg.chat.id, req.body.keyword);
    });
    res.send(req.body.keyword);
});

module.exports = router;