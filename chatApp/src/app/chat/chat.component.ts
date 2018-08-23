import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { SocketService } from '../socket/socket.service';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit{
	 messages = [];
     message:string;
	 userName:string;
	 connection;
     constructor(private router:Router, private sockServ: SocketService){	  
     }

     ngOnInit(){
		 if(!sessionStorage.getItem('userName')){
			 console.log('Not validated');
			 sessionStorage.clear();
			 this.router.navigateByUrl('/login');
		 }else{
			 this.userName = sessionStorage.getItem('userName');
			 console.log('Session started for:' + this.userName);
			 this.connection = this.sockServ.getMessages().subscribe((message:string) => {
				 this.messages.push(message);
				 this.message = '';
			 });
		 }
     }
	 ////ROOMS
	 //io.on('', function(socket){
		 //socket.join('some room');
	 //}
	 //io.to('some room').emit('some event');
	 //socket('room1', () => {
		 //io.to('room1', 'a new user has joined the room');
     //});
  
	 sendMessage(){
		 var d = new Date();
		 var h = d.getHours();
		 var m = d.getMinutes();
		 this.sockServ.sendMessages(this.userName + ' - ' + this.message + ' - ' + h + ':' + m);
	 }
	 
	 ngOnDestory(){
		 if(this.connection){
			 this.connection.unsubscribe();
		 }
	 }
	 
	 signin(){	 
         this.router.navigateByUrl('/login');
     } 
}
