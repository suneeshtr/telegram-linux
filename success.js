var Telegram = require('telegram-bot');
var tg = new Telegram("111179474:AAFY05VcoopwX-VHkE-1-5a1xuIh4K0BFYo");
var mainModule = new Object();
var exec = require('child_process').exec;

tg.sendMessage({
	text: "ubuntu : unlocked",
	chat_id: 47964133,
});