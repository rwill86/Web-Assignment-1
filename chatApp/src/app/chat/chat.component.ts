import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { SocketService } from '../socket/socket.service';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
<<<<<<< HEAD
<<<<<<< HEAD
=======
//Component
=======
<<<<<<< HEAD
>>>>>>> UserService

=======
//Component
>>>>>>> UserService
<<<<<<< HEAD
=======
>>>>>>> 0e0bcc87af02ceb835be39578bf524bd7267fb4f
>>>>>>> UserService
@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
<<<<<<< HEAD
<<<<<<< HEAD
=======
//Class ChatComponent
>>>>>>> UserService
=======
//Class ChatComponent
=======
<<<<<<< HEAD
=======
//Class ChatComponent
>>>>>>> UserService
>>>>>>> 0e0bcc87af02ceb835be39578bf524bd7267fb4f
>>>>>>> UserService
export class ChatComponent implements OnInit{
	 messages = [];
     message:string;
	 userName:string;
	 connection;
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
<<<<<<< HEAD
>>>>>>> UserService
     constructor(private router:Router, private sockServ: SocketService){	  
     }

=======
<<<<<<< HEAD
=======
>>>>>>> 0e0bcc87af02ceb835be39578bf524bd7267fb4f
>>>>>>> UserService
	 login:boolean = false;
	 //Constructor
     constructor(private router:Router, private sockServ:SocketService){	  
     }
     //Init
<<<<<<< HEAD
>>>>>>> UserService
=======
<<<<<<< HEAD
=======
>>>>>>> UserService
>>>>>>> 0e0bcc87af02ceb835be39578bf524bd7267fb4f
>>>>>>> UserService
     ngOnInit(){
		 if(!sessionStorage.getItem('userName')){
			 console.log('Not validated');
			 sessionStorage.clear();
			 this.router.navigateByUrl('/login');
		 }else{
<<<<<<< HEAD
<<<<<<< HEAD
			 this.userName = sessionStorage.getItem('userName');
			 console.log('Session started for:' + this.userName);
=======
=======
=======
<<<<<<< HEAD
			 this.userName = sessionStorage.getItem('userName');
			 console.log('Session started for:' + this.userName);
=======
>>>>>>> 0e0bcc87af02ceb835be39578bf524bd7267fb4f
>>>>>>> UserService
			 //Check if localStorage exist for username
			 if(localStorage.getItem('userName')){
				 //start session
				 var usern = localStorage.getItem('userName');
				 sessionStorage.setItem('userName', usern);
				 this.login = true;
				 console.log('LocalStorage Exist');
			 } 
			 this.userName = sessionStorage.getItem('userName');
			 //Get Messsages
<<<<<<< HEAD
>>>>>>> UserService
=======
<<<<<<< HEAD
=======
>>>>>>> UserService
>>>>>>> 0e0bcc87af02ceb835be39578bf524bd7267fb4f
>>>>>>> UserService
			 this.connection = this.sockServ.getMessages().subscribe((message:string) => {
				 this.messages.push(message);
				 this.message = '';
			 });
		 }
     }
<<<<<<< HEAD
<<<<<<< HEAD
=======
     //SendMessage
	 sendMessage(){
		 if(this.message !== ''){
		     var d = new Date();
		     var h = d.getHours();
		     var m = d.getMinutes();
		     this.sockServ.sendMessages(this.userName + ' - ' + this.message + ' - ' + h + ':' + m);
	     } else{
			 var me = document.getElementById('message');
			 me.style.border = '2px solid #C70039';
		 }
	 }
	 //Destory ng 
=======
<<<<<<< HEAD
>>>>>>> UserService
	 ////ROOMS
	 //io.on('', function(socket){
		 //socket.join('some room');
	 //}
	 //io.to('some room').emit('some event');
	 //socket('room1', () => {
		 //io.to('room1', 'a new user has joined the room');
     //});
  
=======
     //SendMessage
>>>>>>> UserService
	 sendMessage(){
		 var d = new Date();
		 var h = d.getHours();
		 var m = d.getMinutes();
		 this.sockServ.sendMessages(this.userName + ' - ' + this.message + ' - ' + h + ':' + m);
	 }
<<<<<<< HEAD
	 
=======
	 //Destory ng 
>>>>>>> UserService
<<<<<<< HEAD
=======
>>>>>>> 0e0bcc87af02ceb835be39578bf524bd7267fb4f
>>>>>>> UserService
	 ngOnDestory(){
		 if(this.connection){
			 this.connection.unsubscribe();
		 }
	 }
<<<<<<< HEAD
<<<<<<< HEAD
=======
	 //Sign in
=======
<<<<<<< HEAD
>>>>>>> UserService
	 
=======
	 //Sign in
>>>>>>> UserService
<<<<<<< HEAD
=======
>>>>>>> 0e0bcc87af02ceb835be39578bf524bd7267fb4f
>>>>>>> UserService
	 signin(){	 
         this.router.navigateByUrl('/login');
     } 
}
