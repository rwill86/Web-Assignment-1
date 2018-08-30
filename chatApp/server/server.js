const express = require('express');
const app = express();
const path = require('path');
const http = require('http').Server(app);
const io = require('socket.io')(http);
const bodyParser = require('body-parser');
const fs = require('fs');
<<<<<<< HEAD
=======
const cors = require('cors');
>>>>>>> UserService

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, '../dist/chatApp/')));
<<<<<<< HEAD
=======
app.use(cors(corsOptions));
>>>>>>> UserService
require('./auth.js')(app, fs);
require('./register.js')(app, fs);
require('./route.js')(app, path);
require('./socket.js')(app, io);
require('./listen.js')(http);

<<<<<<< HEAD
app.post('/api/auth', functio (req, res){
	 var user = {'id':id, 'username':req.body.username, 'password':reqbody.password}
});

app.delete('/api/auth/:id', function (req, res){
	 user = user.filter(x => x.id !+ id);
	 res.send(user);
});

app.get('/', function (req, res) {
     res.sendFile(path.join(__dirname,'../dist/chatApp/index.html'))
});
app.get('/users', function(req,res){
     res.sendFile(path.join(__dirname,'../dist/chatApp/index.html'))
});
=======
var corsOptions = {
     origin: 'http://localhost:4200',
     optionSuccessStatus: 200
};

//var id = 1;
//if(users.length > 0) {
     //var maximum = Math.max.apply(Math, users.map(function(f){ return f.id; }));
     //id = maximum + 1;
//}
>>>>>>> UserService
