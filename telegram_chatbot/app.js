var express = require('express');

const TelegramBot = require('node-telegram-bot-api'); 
const token = '1031768450:AAFy8Csn6kabeU9AlKf0VLzOFeB6hwxAmaE';
const bot = new TelegramBot(token, {polling: true});

//onText란 /start와 같은 명령어를 뜻함 
bot.onText(/\/start/, (msg) => {
    bot.sendMessage(msg.chat.id, "Ezai 챗봇에 오신 것을 환영합니다.");  
    bot.sendLocation(msg.chat.id,37.602859, 126.955252);
    //photo 전송 
    bot.sendPhoto(msg.chat.id,"/Users/jangjun-yeong/Documents/GitHub/chatbot_project/telegram_chatbot/logo.png" );
});

// 사용자가 message를 보내면 내가 원하는 메세지를 보냄

//indexOf 문자열 내에서 특정한 문자열의 index 값을 리턴한다.
bot.on('message', (msg) => {
    //msg.text 키워드 
    var calendar = "학사일정";
    var Circles = "동아리"
    var association = "학생회"
    var student_ass ="총학생회"
    var ass_1 = "인문사회과학학생회";
    var ass_2 = "사범대학학생회";
    var ass_3 = "경영경제대학학생회";
    var ass_4 = "융합공과대학학생회";
    var ass_5 = "문화예술대학학생회";
    console.log(msg.text);
   
   if (msg.text.toString().toLowerCase().includes(calendar)) {
        bot.sendMessage(msg.chat.id,"상명대학교의 학사일정입니다.\n");
        bot.sendMessage(msg.chat.id,"https://www.smu.ac.kr/ko/life/academicCalendar.do");
    } 
    else if(msg.text.toString().toLowerCase().includes(Circles)){
        bot.sendMessage(msg.chat.id,"동아리 정보입니다.\n");  
        bot.sendMessage(msg.chat.id,"https://www.smu.ac.kr/ko/life/circles.do\n");    
    }
    // 사용자에게 선택지를 줌
    else if(msg.text.toString().toLowerCase().indexOf(association) ===0){
        bot.sendMessage(msg.chat.id,"학생회 정보입니다.", {
             "reply_markup": {
                "keyboard": [["총학생회", "인문사회과학학생회"],   ["사범대학학생회", "경영경제대학학생회"],
                ["융합공과대학학생회", "문화예술대학학생회"]]
                }
            });
    }
    else if(msg.text.toString().toLowerCase()==="총학생회"){
        bot.sendMessage(msg.chat.id,"총학생회 정보입니다\n");  
    }
    // else{
    //     bot.sendMessage(msg.chat.id,"정확한 명령어를 입력해주세요\n");
    // }
});
