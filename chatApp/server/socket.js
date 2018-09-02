module.exports = function(app, io){
	 console.log('Server Socket Initialised');
	 var roomID = 1;
	 var roomName = ['Lobby'];
	 var usernames = {};
	 io.on('connection', (socket) => {
		 console.log('user connection');
		 //Disconnect user
		 socket.on('disconnect', function(){
			 console.log('user disconnect');			
			 //io.sockets.emit('updateUser', usernames);
			 //socket.boardcast.emit('updateChat', 'Server', socket.username + ' has disconnect');
			 //socket.leave(socket.room);
		 });      
		 //Add room/channel
		 socket.on('add-room', function(data){
			 console.log('Added room');
			 //socket.push(data);
			 //socket.emit('updateChat', roomName, socket.room);
		 });
		 //Add user
		 socket.on('add-user', function(username){
			 console.log('Added user');
			 //socket.username = username;
			 //socket.room = 'lobby';
			 //usernames[username] = username;
			 //socket.join('lobby');
			 //socket.emit('updateChat', 'Server', 'You are online.');
			 //socket.broadcast.to('lobby').emit('updateChat', 'Server', username + ' has connected.');
			 //socket.emit('updateRoom', roomName, socket.room);
		  });
		 //Remove user
		 socket.on('remove-user', function(username){			 
			 socket.leave(socket.room);
		  });
		 //Add message
	     socket.on('add-message', (message) => {
			 console.log('message send');
		     io.emit('message', {type:'message', text:message});
		 });
	 });
};