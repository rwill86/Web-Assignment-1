import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
<<<<<<< HEAD

=======
import { UserService } from '../user/user.service';
//Component
>>>>>>> UserService
@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})
<<<<<<< HEAD
export class AccountComponent implements OnInit {
=======
//Class AccountComponent
export class AccountComponent implements OnInit{
>>>>>>> UserService
     userID:string;
	 username:string;
	 birthday:string;
	 email:string;
	 age:string;
<<<<<<< HEAD
	 groupAdmin:boolean;
	 superAdmin:boolean;
     constructor(private router:Router, private form:FormsModule){ 
     }

     ngOnInit(){
		 if(!sessionStorage.getItem('userName')){
			 console.log('Not validated');
			 sessionStorage.clear();
		 } else{
=======
	 login:boolean = false;
	 //Constructor
     constructor(private router:Router, private form:FormsModule){ 
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
			 } 
>>>>>>> UserService
			 this.userID = sessionStorage.getItem('userID');
			 this.username = sessionStorage.getItem('userName');
			 this.birthday = sessionStorage.getItem('birthday');
			 this.age = sessionStorage.getItem('age');
			 this.email = sessionStorage.getItem('email');
		 }
     }
<<<<<<< HEAD
	 
	 //groupAdmin(){
	 //}
	 
	 //superAdmin(){
	 //}
	 
	 signin(){	 
         this.router.navigateByUrl('/login');
     } 
	 
     logout(){	 	 
	     sessionStorage.clear();
=======
	 //Sign In
	 signin(){	 
         this.router.navigateByUrl('/login');
     } 
	 //Logout User
     logout(){	 	
         //clear storage	 
	     sessionStorage.clear();
		 localStorage.clear();
>>>>>>> UserService
		 this.router.navigateByUrl('/login');
     }
}
