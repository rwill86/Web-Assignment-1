module.exports = function(app, fs){
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
<<<<<<< HEAD
>>>>>>> UserService
	 app.get('/api/auth', (req, res) => {
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
=======
<<<<<<< HEAD
=======
>>>>>>> 0e0bcc87af02ceb835be39578bf524bd7267fb4f
>>>>>>> UserService
	 //Route to manage user logins
	 app.get('/api/auth', (req, res) => {
		 //localhost:3000/api/auth?username=Terry
	     var username = req.query.username;
		 var userObject;
		 fs.readFile('authData.json', 'utf8', function(error, data){
			 if(error){
				 //error happens when opening file.
				 console.log(error);			 
				 res.send({'username':'','success':false});
			 } else{
			     userObject = JSON.parse(data);
				 for(var i = 0; i < userObject.length; i++){
					 if(userObject[i].username == username){
						 //find instance of a username
<<<<<<< HEAD
>>>>>>> UserService
=======
<<<<<<< HEAD
=======
>>>>>>> UserService
>>>>>>> 0e0bcc87af02ceb835be39578bf524bd7267fb4f
>>>>>>> UserService
						 res.send({'username':username, 'success':true});
						 return;
					 }
				 }
		     }
			 //no username was found
			 res.send({'username':username, 'success':false});
<<<<<<< HEAD
<<<<<<< HEAD
=======
		 });
=======
<<<<<<< HEAD
>>>>>>> UserService
		 } 
=======
		 });
>>>>>>> UserService
<<<<<<< HEAD
=======
>>>>>>> 0e0bcc87af02ceb835be39578bf524bd7267fb4f
>>>>>>> UserService
	 });
};
