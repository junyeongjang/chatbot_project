var express = require('express');

const TelegramBot = require('node-telegram-bot-api'); 
const token = 'input token';
const bot = new TelegramBot(token, {polling: true});


//onText란 /start와 같은 명령어를 뜻함 
bot.onText(/\/start/, (msg) => {
    bot.sendMessage(msg.chat.id, "Ezai 챗봇에 오신 것을 환영합니다.");
});

// 사용자가 message를 보내면 내가 원하는 메세지를 보냄
bot.on('message', (msg) => {
    //msg.text 키워드 
   console.log(msg.text);
   bot.sendMessage(msg.chat.id, "Ezai 챗봇에 오신 것을 환영합니다.2");
   //메세지를 칠때마다 보내짐 

});
