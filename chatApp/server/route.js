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
	 
     app.get('/user', function(req, res){
         res.sendFile(path.join(__dirname,'../dist/chatApp/index.html'))
     });

>>>>>>> UserService
};
