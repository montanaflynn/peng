peng
=========

Ping web servers to see if they're up, optionally check text return..
Prints errors to stdout..

Create a config file..

servers.json
````
{
	"Google": {
		/* url */
	    "check": "http://google.com",

	    /* seconds, minutes, hours, days, weeks, months, years */
	    "every": "1 minute",

	    /* text that must be matched in the response */
	    "forText": "google"
    },
    
    "GoogleBad": {
	    "check": "http://google331212342342342.com",
	    "every": "1 minute"
    }
}
````

````
$ peng.js
````
