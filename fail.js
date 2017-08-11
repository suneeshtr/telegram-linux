var Telegram = require('telegram-bot');
var tg = new Telegram("<bot tocken>");
var mainModule = new Object();
var exec = require('child_process').exec;

tg.sendMessage({
	text: "ubuntu : failed attempt",
	chat_id: <chat id>,
});