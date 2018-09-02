module.exports = function(app, path, fs){
	 console.log('Routes Started');
	 //default user data
     var users = [
         { userID:1, username:'Super', email:'super@hotmail.com', age:22, birthday:'07/01/1996', pass:'star', type:'Super' },
         { userID:2, username:'Allen', email:'allen@hotmail.com', age:19, birthday:'20/09/1999', pass:'wars', type:'Group' },
         { userID:3, username:'Ritchie', email:'someone@hotmail.com', age:20, birthday:'11/07/1998', pass:'pass', type:'Group' },
         { userID:4, username:'Alex', email:'alexjones@gmail.com', age:44, birthday:'02/11/1974', pass:'frogs', type:'Group' },
		 { userID:5, username:'Kaitlyn',email:'kaitlyn@gmail.com', age:24, birthday:'06/06/1994', pass:'shera',type:'Group' },
         { userID:6, username:'Joe', email:'rogan@gmail.com', age:51, birthday :'15/09/1967', pass:'fearfactor', type:'Group'},
         { userID:7, username:'Terry', email:'terry@gmail.com', pass:'apples', age:23, birthday:'21/12/1995', pass:'apples', type:'Group' }
     ];
	 //main user data from file
	 var userObject;
	 //Get users Api
	 app.get('/api/users', function (req, res){
		 fs.readFile('authData.json', 'utf-8', function(error, data){
			 userObject = JSON.parse(data);
			 res.send(userObject);
		 });
     });
     //Put editing user Api
     app.put('/api/user/:userID', function (req, res){
		 var userID = req.params.userID;
		 for(var i = 0; i < userObject.length; i++){
			 if(userObject[i].userID == userID){
				 userObject[i].email = req.body.email;
				 userObject[i].username = req.body.username;
			 }
		 }
		 var data = JSON.stringify(userObject);
		 fs.writeFile('authData.json', data, '', function(error){
		     if(error){
				 throw error;
		     }		 
	     });
		 res.send({'success':true});		 
		 console.log('Update user.');
     });
	 //Delete user Api
	 app.delete('/api/user/:userID', function (req, res){
		 var userID = req.params.userID;	 
	     for(var i = 0; i < userObject.length; i++){
			 if(userObject[i].userID == userID){
			     delete userObject[i];
				 userObject.splice(i, 1);
		     }
	     }
		 var data = JSON.stringify(userObject);
		 fs.writeFile('authData.json', data, '', function(error){
		     if(error){
				 throw error;
		     }			 
		 });
		 res.send({'success':true});	
		 console.log('Delete user.');
     });
     //get /
     app.get('/', function (req, res){
         res.sendFile(path.join(__dirname,'../dist/chatApp/index.html'))
     });
	 //get /login
	 app.get('/login', function (req, res){
         res.sendFile(path.join(__dirname,'../dist/chatApp/index.html'))
     });
	 //get /account
	 app.get('/account', function (req, res){
         res.sendFile(path.join(__dirname,'../dist/chatApp/index.html'))
     });
	 //get /home
	 app.get('/home', function (req, res){
         res.sendFile(path.join(__dirname,'../dist/chatApp/index.html'))
     });
	 //get /chat
     app.get('/chat', function (req, res){
         res.sendFile(path.join(__dirname,'../dist/chatApp/index.html'))
     });
	 //get /user
     app.get('/user', function(req, res){
         res.sendFile(path.join(__dirname,'../dist/chatApp/index.html'))
     });
};