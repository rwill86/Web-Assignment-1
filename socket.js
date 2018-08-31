module.exports = function(app, io){
	 console.log('Server Socket Initialised');
	 io.on('connection', (socket) => {
		 console.log('user connection');
		 //Disconnect user
		 socket.on('disconnect', function(){
			 console.log('user disconnect');
		 });
		 //Add message
	     socket.on('add-message', (message) => {
		     io.emit('message', {type:'message', text:message});
		 });
	 });
};