const TelegramBot = require('node-telegram-bot-api');  // 텔레그램 node api 사용

const token = 'input token'; // 발급받은 토큰 입력
const bot = new TelegramBot(token, {polling: true});


bot.on('message', (msg) => { //사용자에게 메세지가 오면 응답함
    const chatId = msg.chat.id;
    if(msg.text==='동아리 소개'){
      bot.sendMessage(chatId, '안녕하세요. OO동아리 입니다.');
      bot.sendPhoto(msg.chat.id, './public/logo.png'); //동아리 로고 혹은 소개 이미지
    }
    if(msg.text==='동아리 가입'){
      bot.sendMessage(chatId, '동아리에 가입하시려면, 아래의 양식대로 파일을 작성해서 ~~~@naver.com 으로 파일을 보내주세요');
      bot.sendDocument(msg.chat.id,'./public/test.docx'); //파일 경로 작성
    }
    if(msg.text==='동아리'){
      bot.sendMessage(msg.chat.id, '어떤 정보가 궁금하신가요', { //사용자에게 선택을 요구
        "reply_markup": {
            "keyboard": [['동아리 소개', '동아리 가입']]}
    });
    }
});