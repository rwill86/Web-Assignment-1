import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { SocketService } from '../socket/socket.service';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
<<<<<<< HEAD

=======
//Component
>>>>>>> UserService
@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
<<<<<<< HEAD
=======
//Class ChatComponent
>>>>>>> UserService
export class ChatComponent implements OnInit{
	 messages = [];
     message:string;
	 userName:string;
	 connection;
<<<<<<< HEAD
     constructor(private router:Router, private sockServ: SocketService){	  
     }

=======
	 login:boolean = false;
	 //Constructor
     constructor(private router:Router, private sockServ:SocketService){	  
     }
     //Init
>>>>>>> UserService
     ngOnInit(){
		 if(!sessionStorage.getItem('userName')){
			 console.log('Not validated');
			 sessionStorage.clear();
			 this.router.navigateByUrl('/login');
		 }else{
<<<<<<< HEAD
			 this.userName = sessionStorage.getItem('userName');
			 console.log('Session started for:' + this.userName);
=======
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
>>>>>>> UserService
			 this.connection = this.sockServ.getMessages().subscribe((message:string) => {
				 this.messages.push(message);
				 this.message = '';
			 });
		 }
     }
<<<<<<< HEAD
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
	 ngOnDestory(){
		 if(this.connection){
			 this.connection.unsubscribe();
		 }
	 }
<<<<<<< HEAD
	 
=======
	 //Sign in
>>>>>>> UserService
	 signin(){	 
         this.router.navigateByUrl('/login');
     } 
}
