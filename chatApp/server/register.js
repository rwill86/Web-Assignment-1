module.exports = function(app, fs){
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
<<<<<<< HEAD
>>>>>>> UserService
	 app.get('/api/reg', (req, res) => {
		 var user = 0;
	     var username = req.query.username;
		 var userObject;
		 fs.readFile('authdata.json', 'utf8', function(error, data){
			 if(error){
				 //error happens
				 console.log(error);			 
				 res.send({'username':'','sucess':false});
			 } else{
			     userObject = JSON.parse(data);
				 for(int i = 0; i < userObject.length; i++){
					 if(userObject[i].name == username){
						 //find username
						 user = 1;
						 //res.send({'username':username, 'success':true});
						 //return;
=======
<<<<<<< HEAD
=======
>>>>>>> 0e0bcc87af02ceb835be39578bf524bd7267fb4f
>>>>>>> UserService
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
<<<<<<< HEAD
>>>>>>> UserService
=======
<<<<<<< HEAD
=======
>>>>>>> UserService
>>>>>>> 0e0bcc87af02ceb835be39578bf524bd7267fb4f
>>>>>>> UserService
					 }
				 }
		     }
			 if(user > 0){
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
<<<<<<< HEAD
>>>>>>> UserService
				 //already exist
				 res.send({'username':'','sucess':false});
			 }else{
				 userObject.push({'name':username});
				 var data = JSON.stringify(userObject);
				 fs.writeFile('authdata.json', data, '', function(error){
				     if(error){
						 throw error;
		      	     }
				 });
			 }
		 } 
=======
<<<<<<< HEAD
=======
>>>>>>> 0e0bcc87af02ceb835be39578bf524bd7267fb4f
>>>>>>> UserService
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
<<<<<<< HEAD
>>>>>>> UserService
=======
<<<<<<< HEAD
=======
>>>>>>> UserService
>>>>>>> 0e0bcc87af02ceb835be39578bf524bd7267fb4f
>>>>>>> UserService
	 });
};
