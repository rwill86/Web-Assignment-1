module.exports = function(app, fs){
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
					 }
				 }
		     }
			 if(user > 0){
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
	 });
};
