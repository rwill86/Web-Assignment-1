module.exports = function(app, fs){
	 //Route to manage user logins
	 app.get('/api/auth', (req, res) => {
		 //localhost:3000/api/auth?username=Terry&email=terry@gmail.com
	     var username = req.query.username;
		 var email = req.query.email;
		 var userObject;
		 fs.readFile('authData.json', 'utf-8', function(error, data){
			 if(error){
				 //error happens when opening file.
				 console.log(error);			 
				 res.send({'username':'','success':false});
			 } else{
			     userObject = JSON.parse(data);
				 for(var i = 0; i < userObject.length; i++){
					 if(userObject[i].username == username && userObject[i].email == email){
						 console.log('Found User.');
						 //find instance of a username
						 res.send({'userID':userObject[i].userID, 'username':username, 'email':email, 'birthday':userObject[i].birthday, 'age':userObject[i].age, 'success':true});
						 return;
					 }
				 }
		     }
			 //no username was found
			 res.send({'username':username, 'email':email, 'success':false});
			 console.log('No User.');
		 });
	 });
};
