#!/usr/bin/env node
var settings = require('./problem.json');

process.stdin.on('readable', function(chunk) {
  var chunk = process.stdin.read();
  if (chunk !== null) {
    ex(chunk.toString().replace(/\'/g, '"')); // correct for JSON
  }
});

function ex(msg){
	for(i in settings.Pipes){
	  if(msg.match(RegExp(i))){
	  	console.log('match', settings.Pipes[i]);
      
    }
	}
}

if(settings.Mailgun){
  var Mailgun = require('mailgun').Mailgun;
  var mg = new Mailgun(settings.Mailgun);	

  function mail(f, t, s, b){
    mg.sendText(f, [t], s, b, {'X-Campaign-Id': '0'},
      function(err) { err && console.log(err) });
  }
}

if(settings.Nexmo){
  var nexmo = require('nexmoapi').Nexmo;
  var sms = new nexmo(settings.Nexmo.key, settings.Nexmo.secret);

  function sms(t, b){
    sms.send(settings.Nexmo.mynumber, t, b, console.log);
  }
}