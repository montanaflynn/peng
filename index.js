module.exports=function(min, svrs, cb){
	var http = require('http');
	function ping(s){
		  http.get(s, function(e){
				cb({time: new Date(), server: s, status: e.statusCode});
		  }).on('error', function(e){
				cb({time: new Date(), server: s, error: e.message});
		  });
	}
	
	svrs.forEach(function(svr){
			ping(svr);
			setInterval((function(){ping(svr)}), min*60000);
	})
}