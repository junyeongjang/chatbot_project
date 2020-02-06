var express = require('express');
const Chat = require('../models').Chat;
var router = express.Router();

const TelegramBot = require('node-telegram-bot-api'); 
const token2 = '821604164:AAExhkSPWgRv5aDVSh29zSaOJpmyIWHWcK8';
const bot2 = new TelegramBot(token2, {polling: true});

router.get('/', function(req, res, next) {
  res.render('main2.html')
});

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

// bot2.onText(/\/start/, (msg) => {
//   bot2.sendMessage(msg.chat.id, "Ezai 챗봇에 오신 것을 환영합니다.");  
//   bot2.sendMessage(msg.chat.id, "Ezai 챗봇에 오신 것을 환영합니다."); 
//   //photo 전송 
//   bot2.sendPhoto(msg.chat.id,"/Users/jangjun-yeong/Documents/GitHub/chatbot_project/telegram_chatbot/logo.png" );
//   //location 전송 좌표를 전송하면 google 맵에서 좌표 표시
//   bot2.sendLocation(msg.chat.id,37.602859, 126.955252); //상명대학교 좌표
// });
module.exports = router;