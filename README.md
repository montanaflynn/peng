ping-node
=========

###Ping web servers to see if they're up.. Every 10 min by default.

servers.json
````
{
	"http://baddomain.git": "",
	"http://dpsw.info": ""
}
````

````
$ node ping
````

###Options

Every one minute..
````
$ min=1 node ping
````