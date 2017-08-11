var Telegram = require('telegram-bot');
new Telegram("<bot tocken>");
var mainModule = new Object();
var exec = require('child_process').exec;

tg.sendMessage({
	text: "ubuntu : login",
	chat_id: <chatid>,
});
tg.on('message', function(msg) {
	if(msg.text=="/lock"){
		tg.sendMessage({
			text: "ubuntu : lock request received",
			chat_id: <chatid>,
		});
		exec("/usr/bin/slock", function(err, stdout, stderr) {
		  	
		});
	}
	if(msg.text=="/record"){
		exec("arecord new.wav", function(err, stdout, stderr) {
		  console.log("record");
		});
	}
	if(msg.text=="/stoprecord"){
		exec("killall arecord", function(err, stdout, stderr) {
		  console.log("stop record");
		});
	}
});
tg.start();
