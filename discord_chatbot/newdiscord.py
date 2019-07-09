import discord

client = discord.Client()

@client.event
async def on_ready():
    print(client.user.id)
    print("ready")


@client.event
async def on_message(message):
    if message.content.startswith("안녕"):
        await message.channel.send("할말")
    if message.content.startswith("잘가"):
        await message.channel.send("또만나")


client.run("NTk4MTc2MzEzOTcwMjYyMDI3.XSS1Nw.4KIACE-Ae7JsqOoIdpEGYp9Hct8")
