require("dotenv").config();
const { is } = require("express/lib/request");
const TelegramBot = require("node-telegram-bot-api");
const ExplorerController = require("./controllers/ExplorerController");
console.log(ExplorerController.getExplorersNameByMission("node"))
// replace the value below with the Telegram token you receive from @BotFather
// Create a bot that uses 'polling' to fetch new updates
const bot = new TelegramBot(process.env.TELEGRAM_BOT_TOKEN, {polling: true});
// Matches "/echo [whatever]"
bot.onText(/\/echo (.+)/, (msg, match) => {
    // 'msg' is the received Message from Telegram
    // 'match' is the result of executing the regexp above on the text content
    // of the message
    const chatId = msg.chat.id;
    const resp = match[1]; // the captured "whatever"
    // send back the matched "whatever" to the chat
    bot.sendMessage(chatId, resp);
});
// Listen for any kind of message. There are different kinds of
// messages.
bot.on("message", (msg) => {
    const chatId = msg.chat.id;
    const ToApplyFb = msg.text;

    if(!isNaN(ToApplyFb)){
        const fizzbuzzTrick = ExplorerController.getNumberExplorer(ToApplyFb);
        const responseBot = `Tu número es: ${ToApplyFb}. Validación: ${fizzbuzzTrick}`;
        bot.sendMessage(chatId, responseBot);
    }else if(ToApplyFb == "node","java"){
        const namesInMission = ExplorerController.getExplorersNameByMission(ToApplyFb);
        const responseBot = `Explorers en:  ${ToApplyFb}\nNombres:  ${namesInMission}`;
        bot.sendMessage(chatId, responseBot);
    } else{
        bot.sendMessage(chatId, "Envía un número válido");
    }
});