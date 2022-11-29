const express = require('express');
const MongoClient = require('mongodb').MongoClient

const app1 = express();
const app2 = express();


const url = 'mongodb://127.0.0.1:27017'

let dbname 

let db
const client = new MongoClient(url);



// Handler method
const handler = num => (req,res)=>{
	const { method, url, headers, body } = req;
	// console.log("url is " + url);
	// console.log("method is " + method);
 	// console.log("headers is " + headers);
	//  console.log("body is " + body);

	console.log(url+" "+num);

	if(url=='/log_in')
	res.render('../views/log_in.ejs');
	
	

	else if(url=='/temp') res.render('../views/temp.ejs')

	else res.send("Server is "+num)
}

// Only handle GET and POST requests
// Receive request and pass to handler method
// app2.get('*', handler(1)).post('*', handler(1));
// app1.get('*', handler(0)).post('*', handler(0));

// Start server on PORT 3000
app1.listen(3000, err =>{
	err ?
	console.log("Failed to listen on PORT 3000"):
	console.log("Application Server listening on PORT 3000");
});

// Start server on PORT 3001
app2.listen(3001, err =>{
	err ?
	console.log("Failed to listen on PORT 3001"):
	console.log("Application Server listening on PORT 3001");
});

app1.post('/log_in/:username/:password',cors(),async function(req,res,next){

    username = req.params.username;

    //console.log("keyword is "+keyword)

    pword = req.params.password;

   // console.log("year search is "+year)

    dbname = "netflix_log_in"

    db=client.db(dbname)

  

     db.collection('user').find({uname:"abcd"}).toArray(function(err,result){

         if(err) console.log(err)

     })

     try {
        console.log("Inside try login ")
       
       var user = await db.collection('user').find({uname:username,password:pword}).toArray();

		if(user.length==0) res.send({"exists":"false"})

		else res.send({"exists":"true"})
       
      
  
      
  } catch (err) {
      return res.status(500);
  }
  
})