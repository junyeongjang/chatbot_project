import telegram

api_key = '821604164:AAExhkSPWgRv5aDVSh29zSaOJpmyIWHWcK8'

bot = telegram.Bot(token=api_key)

# chat_id = bot.get_updates()[-1].message.chat_id
chat_id = 858479506

bot.sendMessage(chat_id=chat_id, text='안녕하세요. 상명대학교 챗봇입니다.')