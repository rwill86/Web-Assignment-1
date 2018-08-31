import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { SocketService } from '../socket/socket.service';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
//Component
@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
//Class ChatComponent
export class ChatComponent implements OnInit{
	 public messages = [];
     public message:string;
	 public userName:string;
	 public connection;
	 public login:boolean = false;
	 //Constructor
     constructor(private router:Router, private sockServ:SocketService){	  
     }
     //Init
     ngOnInit(){
		 if(!sessionStorage.getItem('userName')){
			 console.log('Not validated');
			 sessionStorage.clear();
			 this.router.navigateByUrl('/login');
		 }else{
			 this.userName = sessionStorage.getItem('userName');
			 console.log('Session started for:' + this.userName);
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
			 this.connection = this.sockServ.getMessages().subscribe((message:string) => {
				 this.messages.push(message);
				 this.message = '';
			 });
		 }
     }
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
	 ngOnDestory(){
		 if(this.connection){
			 this.connection.unsubscribe();
		 }
	 }
	 //Sign in
	 signin(){	 
         this.router.navigateByUrl('/login');
     } 
}
