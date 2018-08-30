module.exports = function(app, fs){
<<<<<<< HEAD
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
>>>>>>> UserService
						 res.send({'username':username, 'success':true});
						 return;
					 }
				 }
		     }
			 //no username was found
			 res.send({'username':username, 'success':false});
<<<<<<< HEAD
		 } 
=======
		 });
>>>>>>> UserService
	 });
};
