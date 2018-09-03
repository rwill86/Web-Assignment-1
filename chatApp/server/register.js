module.exports = function(app, fs){
	 //Route to manage user 
	 app.get('/api/reg', (req, res) => {
		 var user = 0;
		 //localhost:3000/api/reg?username=Tom&email=terry@gmail.com
	     var username = req.query.username;
		 var email = req.query.email;
		 var age = 18;
		 var pass = 'pass';
		 var type = 'Group';
		 var birth = '01/06/1998';
		 var userObject;
		 fs.readFile('authData.json', 'utf-8', function(error, data){
			 if(error){
				 //error happens
				 console.log(error);			 
				 res.send({'username':'','success':false});
			 } else{
			     userObject = JSON.parse(data);
				 for(var i = 0; i < userObject.length; i++){
					 if(userObject[i].username == username || userObject[i].email == email){
						 //Check for duplicates users
						 user = 1;
					 }
				 }
		     }
			 if(user > 0){
				 //username already exist in the file
				 res.send({'username':'','success':false});
			 }else{
				 var userID = 1;
                 if(userObject.length > 0){
                     var maximum = Math.max.apply(Math, userObject.map(function(f){ return f.userID; }));
                     userID = maximum + 1;
                 }
				 //All username to the file
				 userObject.push({'userID': userID, 'username': username, 'email':email, 'password':pass, 'age':age, 'birthday':birth, 'type':type});
				 var data = JSON.stringify(userObject);
				 fs.writeFile('authData.json', data, '', function(error){
				     if(error){
						 throw error;
		      	     }
					 //Send response that registration was successfull
					 res.send({'username': username, 'email':email, 'success':true});
					 console.log('regi user.');
				 });
			 }
		 });
	 });
};
