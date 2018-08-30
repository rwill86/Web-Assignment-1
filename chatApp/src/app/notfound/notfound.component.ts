import { Component, OnInit } from '@angular/core';
<<<<<<< HEAD
//Component
=======
<<<<<<< HEAD

=======
//Component
>>>>>>> UserService
>>>>>>> 0e0bcc87af02ceb835be39578bf524bd7267fb4f
@Component({
  selector: 'app-notfound',
  templateUrl: './notfound.component.html',
  styleUrls: ['./notfound.component.css']
})
<<<<<<< HEAD
=======
<<<<<<< HEAD
export class NotfoundComponent implements OnInit{
     constructor(){ 
	 }

     ngOnInit(){
=======
>>>>>>> 0e0bcc87af02ceb835be39578bf524bd7267fb4f
//Class NotfoundComponent
export class NotfoundComponent implements OnInit{
	 login:boolean = false;
	 //Constructor
     constructor(){ 
	 }
     //Init
     ngOnInit(){
		 if(!sessionStorage.getItem('userName')){
			 console.log('Not validated.');
			 sessionStorage.clear();
			 this.login = false;
		 } else{
			 //Check if localStorage exist for username
			 if(localStorage.getItem('userName')){
				 //start session
				 var usern = localStorage.getItem('userName');
				 sessionStorage.setItem('userName', usern);
				 this.login = true;
				 console.log('LocalStorage Exist');
			 } else{
				 this.login = false;
			 }
		 }
<<<<<<< HEAD
=======
>>>>>>> UserService
>>>>>>> 0e0bcc87af02ceb835be39578bf524bd7267fb4f
     }
}
