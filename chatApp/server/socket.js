module.exports = function(app, io){
	 console.log('Server Socket Initialised');
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
<<<<<<< HEAD
>>>>>>> UserService
	 io.on('connection', (socket) =>{
		 console.log('user connection');
		 socket.on('disconnect', function(){
			 console.log('user disconnect');
		 });
	     socket.on('add-message', (message)=>{
=======
<<<<<<< HEAD
=======
>>>>>>> 0e0bcc87af02ceb835be39578bf524bd7267fb4f
>>>>>>> UserService
	 io.on('connection', (socket) => {
		 console.log('user connection');
		 //Disconnect user
		 socket.on('disconnect', function(){
			 console.log('user disconnect');
		 });
		 //Add message
	     socket.on('add-message', (message) => {
<<<<<<< HEAD
>>>>>>> UserService
=======
<<<<<<< HEAD
=======
>>>>>>> UserService
>>>>>>> 0e0bcc87af02ceb835be39578bf524bd7267fb4f
>>>>>>> UserService
		     io.emit('message', {type:'message', text:message});
		 });
	 });
};