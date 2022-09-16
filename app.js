// import TelegramBot from 'node-telegram-bot-api';
//
// const token = process.env['BOT_TOKEN'] || '';
//
// const bot = new TelegramBot(token, { polling: true });
//
// bot.on('message', (msg) => {
//   const chatId = msg.chat.id;
//
//   bot.sendMessage(chatId, 'Received your message');
// });
//
import express from 'express';
const app = express();
app.get('/', (_req, res) => {
    res.send('Hello World!');
});
// start the server listening for requests
app.listen(process.env['PORT'], () => console.log('Server is running...'));
