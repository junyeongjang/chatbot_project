import sys
import ChatBotModel

def proc_rolling(bot, update):
    chii.sendMessage('학사정보는~~~')
    sound = firecracker()
    chii.sendMessage(sound)

def proc_stop(bot, update):
    chii.sendMessage('봇이 꺼집니다.')
    chii.stop()

def firecracker():
    return '팡팡!'

chii = ChatBotModel.BotChii()
chii.add_handler('학사정보', proc_rolling)
chii.add_handler('stop', proc_stop)
chii.start()