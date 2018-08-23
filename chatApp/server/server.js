const express = require('express');
const app = express();
const path = require('path');
const http = require('http').Server(app);
const io = require('socket.io')(http);
const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, '../dist/chatApp/')));
require('./route.js')(app,path);
require('./socket.js')(app, io);
require('./listen.js')(http);
//http.createServer(app).listen(3000);
//console.log('Server started');

//app.get('/', function(req, res){
	//console.log('index page');
	//res.sendFile(__dirname + './../dist/chat/index.html');
//});

//app.get('/index', function(req, res){
	//res.sendFile(__dirname + '/index.html');
//});

//app.get('/account', function(req, res){
	//res.sendFile(__dirname + '/www/account.html');
//});

//app.get('/login', function(req, res){
	//res.sendFile(__dirname + '/www/login.html');
//});

//app.get('/getData', function(req, res){
	//res.send('<h1>Hello World</h1><p>This is a page.</p>');
//});

//app.post('/postData', function(req, res){
	//res.send('<p>Post is working</p>');
//});

//app.post('/login', function(req, res){	
	//var email = req.body.email;
	//var password = req.body.password;
	//var email = 'some@hotmail.com';
	//var password = 'pass';
	//var user = {
		 //'username':username,
		 //'password':password,
		// boolean:valid
	//};
    //user.valid = email == 'some@hotmail.com' && password == 'pass';
    //res.send(user);
//});

//app.post('/api/users', jsonParser, function (req, res) {
    //if (!req.body){
		//return res.sendStatus(400);
	//}
//});