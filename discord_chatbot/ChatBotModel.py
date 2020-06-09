import telegram
from telegram.ext import Updater, CommandHandler

class TelegramBot:
    def __init__(self, name, token):
        self.core = telegram.Bot(token)
        self.updater = Updater(token)
        self.id = 123456789
        self.name = name

    def sendMessage(self, text):
        self.core.sendMessage(chat_id = 858479506, text=text)

    def stop(self):
        self.updater.start_polling()
        self.updater.dispatcher.stop()
        self.updater.job_queue.stop()
        self.updater.stop()
class BotChii(TelegramBot):
    def __init__(self):
        self.token = 'input token'
        TelegramBot.__init__(self, '치이', self.token)
        self.updater.stop()

    def add_handler(self, cmd, func):
        self.updater.dispatcher.add_handler(CommandHandler(cmd, func))

    def start(self):
        self.sendMessage('안녕하세요 상명대학교 챗봇입니다.')
        self.updater.start_polling()
        self.updater.idle()