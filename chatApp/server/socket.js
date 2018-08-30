module.exports = function(app, io){
	 console.log('Server Socket Initialised');
<<<<<<< HEAD
=======
<<<<<<< HEAD
	 io.on('connection', (socket) =>{
		 console.log('user connection');
		 socket.on('disconnect', function(){
			 console.log('user disconnect');
		 });
	     socket.on('add-message', (message)=>{
=======
>>>>>>> 0e0bcc87af02ceb835be39578bf524bd7267fb4f
	 io.on('connection', (socket) => {
		 console.log('user connection');
		 //Disconnect user
		 socket.on('disconnect', function(){
			 console.log('user disconnect');
		 });
		 //Add message
	     socket.on('add-message', (message) => {
<<<<<<< HEAD
=======
>>>>>>> UserService
>>>>>>> 0e0bcc87af02ceb835be39578bf524bd7267fb4f
		     io.emit('message', {type:'message', text:message});
		 });
	 });
};