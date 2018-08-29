module.exports = function(app, fs){
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
						 res.send({'username':username, 'success':true});
						 return;
					 }
				 }
		     }
			 //no username was found
			 res.send({'username':username, 'success':false});
		 });
	 });
};
