#!/usr/bin/env node
var ser = require('./servers.json'),
    request = require('request');

for(ver in ser){
  
  ping(ver, ser[ver].check, ser[ver].forText);

  setInterval(function(){
    ping(ver, ser[ver].check, ser[ver].forText);

  }, uglifytime(ser[ver].every));

}

function ping(name, what, forText){
  request(what, function(e, r, b){
  	var date = (new Date()+'').split(' ').slice(0, 6).join(' ');
    if(e)
      return console.log([date, name, e.message]);
    if(!b.match(RegExp(forText)))
      console.log([date, name, 'no match for ' + forText]);

  });
}

function uglifytime(what){
  var ts = {
      second: 1000,
      minute: 60 * 1000,
      hour: 60 * 1000 * 60,
      day: 24 * 60 * 1000 * 60,
      week: 7 * 24 * 60 * 1000 * 60,
      month: 30 * 24 * 60 * 1000 * 60,
      year: 365 * 24 * 60 * 1000 * 60
  };

  var t = what.split(' ');  
  var uglytime = t[0] * ts[t[1].replace(/s$/, '')];

  if(isNaN(uglytime) || uglytime === 0)
  	throw Error('Invalid every param' + what);
  
  return uglytime;
}