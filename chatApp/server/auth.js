module.exports = function(app, fs){
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
						 res.send({'username':username, 'success':true});
						 return;
					 }
				 }
		     }
			 //no username was found
			 res.send({'username':username, 'success':false});
		 } 
	 });
};
