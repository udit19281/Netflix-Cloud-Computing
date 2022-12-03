const express = require('express');
const path = require('path');
const app = express();
const axios = require('axios');
const { resolveSoa } = require('dns');

// Application servers
const servers = [
	"http://localhost:3000",
	"http://localhost:3001"
]

// Track the current application server to send request
let current = 0;

// Receive new request
// Forward to application server
const handler = async (req, res) =>{

	// Destructure following properties from request object
	const { method, url, headers, body } = req;

	// console.log("url is " + url);
	// console.log("method is " + method);
	// console.log("headers is " + headers);
	// console.log("body is " + body);

	//if(url=='/favicon.ico') console.log("Fukcing favicon");
		
	console.log("config with url as " + url);

     current=0;

    if(url=='/login') current=1;
	// Select the current server to forward the request
	const server = servers[current];



	try{
		// Requesting to underlying application server
		const response = await axios({
			url: `${server}${url}`,
			method: method,
			headers: headers,
			data: body
		});
		// Send back the response data
		// from application server to client
		res.send(response.data)
	}
	catch(err){
		// Send back the error message
		

	}
}


// When receive new request
// Pass it to handler method
app.use((req,res)=>{handler(req, res)});

// Listen on PORT 8080
app.listen(8080, err =>{
	err ?
	console.log("Failed to listen on PORT 8080"):
	console.log("Load Balancer Server "
		+ "listening on PORT 8080");
});
