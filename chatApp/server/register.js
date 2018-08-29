module.exports = function(app, fs){
	 //Route to manage user logins
	 app.get('/api/reg', (req, res) => {
		 var user = 0;
		 //localhost:3000/api/reg?username=Tom
	     var username = req.query.username;
		 var userObject;
		 fs.readFile('authData.json', 'utf8', function(error, data){
			 if(error){
				 //error happens
				 console.log(error);			 
				 res.send({'username':'','success':false});
			 } else{
			     userObject = JSON.parse(data);
				 for(var i = 0; i < userObject.length; i++){
					 if(userObject[i].username == username){
						 //Check for duplicates users
						 user = 1;
					 }
				 }
		     }
			 if(user > 0){
				 //username already exist in the file
				 res.send({'username':'','success':false});
			 }else{
				 //All username to the file
				 userObject.push({'username': username});
				 var data = JSON.stringify(userObject);
				 fs.writeFile('authData.json', data, '', function(error){
				     if(error){
						 throw error;
		      	     }
					 //Send response that registration was successfull
					 res.send({'username': username, 'success':true})
				 });
			 }
		 });
	 });
};
