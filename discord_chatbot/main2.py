from telegram.ext import Updater, MessageHandler, Filters


updater = Updater(token='821604164:AAExhkSPWgRv5aDVSh29zSaOJpmyIWHWcK8')
dispatcher = updater.dispatcher
updater.start_polling()


def handler(bot, update):
    text = update.message.text
    chat_id = update.message.chat_id
    if '동아리' in text:
         circle(bot,update)
    elif '춤' in text:
         dance_circle(bot, update)
    elif '춤 동아리' in text:
         dance_circle(bot, update)
    elif '학술 동아리' in text:
         study_circle(bot,update)
    elif '학술' in text:
         study_circle(bot,update)
    elif '학사 일정' in text:
         academic_calendar(bot,update)
    elif '학식' in text:
         student_restaurant(bot,update)
    else:
        bot.send_message(chat_id=chat_id, text='잘 모르겠어요 다시 질문해 주세요')

def circle(bot,update):
    text = update.message.text
    chat_id = update.message.chat_id
    bot.send_message(chat_id=chat_id, text='어느 종류의 동아리 정보를 원하세요 ?')
    bot.send_message(chat_id=chat_id, text='1. 춤 동아리 2. 학술 동아리 3. 봉사 동아리')
def dance_circle(bot,update):
    text = update.message.text
    chat_id = update.message.chat_id
    bot.send_message(chat_id=chat_id, text='춤 동아리에는 토네이도가 있습니다')

def study_circle(bot,update):
    text = update.message.text
    chat_id = update.message.chat_id
    bot.send_message(chat_id=chat_id, text='학술 동아리에는 알고리즘 동아리가 있습니다')

def academic_calendar(bot,update):
    text = update.message.text
    chat_id = update.message.chat_id
    bot.send_message(chat_id=chat_id, text='학사 일정은 ~~~ ')

def student_restaurant(bot,update):
    text = update.message.text
    chat_id = update.message.chat_id
    bot.send_message(chat_id=chat_id, text='오늘 학식은 김치 볶음밥 입니다. ')


echo_handler = MessageHandler(Filters.text, handler)
dispatcher.add_handler(echo_handler)
