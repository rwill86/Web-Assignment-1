module.exports = function(app, io){
	 console.log('Server Socket Initialised');
	 var roomID = 1;
	 io.on('connection', (socket) => {
		 console.log('user connection');
		 //Disconnect user
		 socket.on('disconnect', function(){
			 console.log('user disconnect');
		 });      
		 //Add channel
		 socket.on('add-channel', function(data){
			 socket.join('Chat Room' + roomID);
		 });
		 //send
		 //socket.broadcast.to('room').emit('message');
		 //socket.broadcast.emit('boardcast', data);
		 //Remove user
		  socket.on('remove-user', function(){
			 socket.leave('Chat Room' + roomID);
		  });
		 //Add message
	     socket.on('add-message', (message) => {
		     io.emit('message', {type:'message', text:message});
		 });
	 });
};