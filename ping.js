
(function(){
	var servers = require('./servers.json'); require('colors');

	function ping(s, cb){
		require('http').get(s, function(e){
				cb({time: new Date(), server: s, status: e.statusCode});
		}).on('error', function(e){
				cb({time: new Date(), server: s, error: e.message});
		})
	}

	function display(o){
		if(o.status && o.status==200) console.log(JSON.stringify(o).green);
		if(o.error) console.log(JSON.stringify(o).red);
	}

	for(i in servers){
			ping(i, display);
	}
	setTimeout(arguments.callee, (process.env.min||10) *60000);
})();