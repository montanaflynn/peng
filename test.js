
var 	p = require('./index.js')
		, colors = require('colors');

function resp(o){
	console.log(o);
}

p( minutes=1, ['http://somebaddomain.info', 'http://convert-mp3.info'], resp);
