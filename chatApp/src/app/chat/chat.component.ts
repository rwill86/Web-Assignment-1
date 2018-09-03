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
	 public users = [];
     public message:string;
	 public userName:string;
	 public room:string;
	 public connection;
	 public login:boolean = false;
	 public admin:string;
	 public checkIFGroupAdmin:boolean = false;
	 //Constructor
     public constructor(private router:Router, private form:FormsModule, private sockServ:SocketService){	  
     }
     //Init
     public ngOnInit(){
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
			 this.CheckAdmin();
			 //Get Messsages
			 this.getMes();
		 }
     }
	 //Check Admin
	 public CheckAdmin(){
		 //Check if sessionStorage is super admin
		 if(sessionStorage.getItem('userName') == 'Super' || sessionStorage.getItem('userName') == 'super'){
			 this.checkIFGroupAdmin = false;
			 console.log('super admin');
		     this.admin = 'Super';
		 } else{
			 this.checkIFGroupAdmin = true;
		     console.log('group admin');
		     this.admin = 'Group';
		 }
	 }
	 //get Messages
	 public getMes(){
		 this.connection = this.sockServ.getMessages().subscribe((message:string) => {
		     this.messages.push(message);
			 this.message = '';
		 });
	 }
     //SendMessage
	 public sendMessage(){
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
	 //Add Channel
	 public addChannel(event){	
	     event.preventDefault();	
         this.sockServ.addRoom(this.room);	 
	 }
	 //Add Channel
	 public removeChannel(){	
         this.sockServ.removeRoom('room');	 
	 }	 
	 //Add user
	 public getUser(){	
         this.sockServ.getUser('user');	 	 
	 }
	 //remove User
 	 public removeUser(){
         this.sockServ.removeUser('user');			 
	 }
	 //Destory ng 
	 public ngOnDestory(){
		 if(this.connection){
			 this.connection.unsubscribe();
		 }
	 }
	 //Sign in
	 public signin(){	 
         this.router.navigateByUrl('/login');
     } 
}
