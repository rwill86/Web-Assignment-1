module.exports = function(app, path){
	 console.log('Routes Started');
	 //user data
     var users = [
         { userID:1, username:'Super', email:'super@hotmail.com', age:22, birthday:'07/01/1996', pass:'star', type:'Super' },
         { userID:2, username:'Allen', email:'allen@hotmail.com', age:19, birthday:'20/09/1999', pass:'wars', type:'Group' },
         { userID:3, username:'Ritchie', email:'someone@hotmail.com', age:20, birthday:'11/07/1998', pass:'pass', type:'Group' },
         { userID:4, username:'Alex', email:'alexjones@gmail.com', age:44, birthday:'02/11/1974', pass:'frogs', type:'Group' }
     ];
	 //Get users Api
	 app.get('/api/auth', function (req, res) {
         res.send(users);
     });
	 //Post new user Api
     app.post('/api/auth', function (req, res){
		 var userID = 1;
         if(users.length > 0){
             var maximum = Math.max.apply(Math, users.map(function(f){ return f.userID; }));
             userID = maximum + 1;
         }
	     var newUser = {'userID':userID, 'username':req.body.username, 'email':req.body.email}
		 users.push(newUser);
		 res.send(newUser);
		 console.log('New user created.');
     });
     //Put editing user Api
     app.put('/api/auth/:userID', function (req, res){
		 var userID = req.params.userID;
	     var u = users.find(x => x.userID == userID);
		 u.username = req.body.username;
	  	 u.email = req.body.email;
	     res.send(u);
		 console.log('Update user.');
     });
	 //Delete user Api
	 app.delete('/api/auth/:userID', function (req, res){
		 var userID = req.params.userID;
		 var u = users.filter(x => x.userID == userID);
		 users = users.filter(x => x.userID != userID);
         res.send(u);
		 console.log('Delete user.');
     });
     //get /
     app.get('/', function (req, res) {
         res.sendFile(path.join(__dirname,'../dist/chatApp/index.html'))
     });
	 //get /login
	 app.get('/login', function (req, res) {
         res.sendFile(path.join(__dirname,'../dist/chatApp/index.html'))
     });
	 //get /account
	 app.get('/account', function (req, res) {
         res.sendFile(path.join(__dirname,'../dist/chatApp/index.html'))
     });
	 //get /home
	 app.get('/home', function (req, res) {
         res.sendFile(path.join(__dirname,'../dist/chatApp/index.html'))
     });
	 //get /chat
     app.get('/chat', function (req, res) {
         res.sendFile(path.join(__dirname,'../dist/chatApp/index.html'))
     });
	 //get /user
     app.get('/user', function(req, res){
         res.sendFile(path.join(__dirname,'../dist/chatApp/index.html'))
     });
};