<<<<<<< HEAD
module.exports = function(app, path){
	 console.log('Routes Started');
	 //user data
     var users = [
         { userID:1, username:'Super', email:'super@hotmail.com', age:22, birthday:'07/01/1996', pass:'star' },
         { userID:2, username:'Allen', email:'allen@hotmail.com', age:19, birthday:'20/09/1999', pass:'wars' },
         { userID:3, username:'Ritchie', email:'someone@hotmail.com', age:20, birthday:'11/07/1998', pass:'pass' },
         { userID:4, username:'Alex', email:'alexjones@gmail.com', age:44, birthday:'02/11/1974', pass:'frogs' }
     ];
     
     var userID = 1;
     if(users.length > 0){
         var maximum = Math.max.apply(Math, users.map(function(f){ return f.userID; }));
         userID = maximum + 1;
     }
	 //post new user
     app.post('/api/auth', function (req, res){
	     var newUser = {'userID':userID, 'username':req.body.username, 'email':req.body.email}
		 users.push(newUser);
		 res.send(newUser);
     });
     //put user 
     app.delete('/api/auth/:userID', function (req, res){
		 var userID = req.params.userID;
	     //var u = users.find(x => x.userID !+ userID);
		 u.username = req.body.username;
	     res.send(u);
     });
	 //delete user
	 app.delete('/api/auth/:userID', function (req, res){
		 //users = users.filter(x => x.userID != userID);
         res.send(u);
     });
	 //route the user
	 app.get('/api/auth', function(req, res){
         res.send({ users: [{username:'Ritchie'}, {username:'Alex'}] });
     });
	 //route the user
	 app.route('/api/auth').post(function(req, res){
         res.send(201, req.body);
     });
	 //route the username
	 app.route('/api/auth/:username').get(function(req, res){
         const requestedUser = req.params['username'];
         res.send({username: requestedUser});
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
	 //get /chat
     app.get('/chat', function (req, res) {
         res.sendFile(path.join(__dirname,'../dist/chatApp/index.html'))
     });
	 //get /user
=======
<<<<<<< HEAD
var url = require('url');
var fs = require('fs');

module.exports = function(app, path){
	 console.log('Routes Started');
	 //handleRequest: function(request, response){
		 //var path = url.parse(request.url).pathname;
		 //if(path == '/' || path == '/index'){
			 //renderHTML('../dist/chat/index.html', app);
		 //} //else if(path == '/account'){
			 //renderHTML('./www/account.html', response);
		 //} else if(path == '/login'){
			 //renderHTML('./www/login.html', response);
		 //}else{
			 //renderHTML(null, response);
			 //response.writeHead(404);
             //response.write('Route not defined');
             //response.end();
		 //}
	 //}
=======
module.exports = function(app, path){
	 console.log('Routes Started');	 
     app.post('/api/auth', function (req, res){
	     var user = {'userID':id, 'username':req.body.username, 'password':reqbody.password}
     });

     //app.delete('/api/auth/:userID', function (req, res){
	     //user = user.filter(x => x.id !+ id);
	     //res.send(user);
     //});
	 
	 app.get('/api/users', function(req, res){
         res.send({ users: [{username:'Ritchie'}, {username:'Alex'}] });
     });
	 
	 app.route('/api/users').post(function(req, res){
         res.send(201, req.body);
     });
	 
	 app.route('/api/users/:username').get(function(req, res){
         const requestedUser = req.params['username'];
         res.send({username: requestedUser});
     });

     app.get('/', function (req, res) {
         res.sendFile(path.join(__dirname,'../dist/chatApp/index.html'))
     });
	 
	 app.get('/login', function (req, res) {
         res.sendFile(path.join(__dirname,'../dist/chatApp/index.html'))
     });
	 
	 app.get('/account', function (req, res) {
         res.sendFile(path.join(__dirname,'../dist/chatApp/index.html'))
     });
	 
     app.get('/chat', function (req, res) {
         res.sendFile(path.join(__dirname,'../dist/chatApp/index.html'))
     });
	 
>>>>>>> 0e0bcc87af02ceb835be39578bf524bd7267fb4f
     app.get('/user', function(req, res){
         res.sendFile(path.join(__dirname,'../dist/chatApp/index.html'))
     });

<<<<<<< HEAD
=======
>>>>>>> UserService
>>>>>>> 0e0bcc87af02ceb835be39578bf524bd7267fb4f
};
