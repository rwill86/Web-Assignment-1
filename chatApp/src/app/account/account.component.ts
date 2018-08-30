import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
<<<<<<< HEAD
import { UserService } from '../user/user.service';
//Component
=======
<<<<<<< HEAD

=======
import { UserService } from '../user/user.service';
//Component
>>>>>>> UserService
>>>>>>> 0e0bcc87af02ceb835be39578bf524bd7267fb4f
@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})
<<<<<<< HEAD
//Class AccountComponent
export class AccountComponent implements OnInit{
=======
<<<<<<< HEAD
export class AccountComponent implements OnInit {
=======
//Class AccountComponent
export class AccountComponent implements OnInit{
>>>>>>> UserService
>>>>>>> 0e0bcc87af02ceb835be39578bf524bd7267fb4f
     userID:string;
	 username:string;
	 birthday:string;
	 email:string;
<<<<<<< HEAD
	 admin:string
	 age:string;
	 login:boolean = false;
	 checkIFSuperAdmin:boolean = false;	 	
=======
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
>>>>>>> 0e0bcc87af02ceb835be39578bf524bd7267fb4f
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
<<<<<<< HEAD
			 } 			 
			 //Check admin
			  //Check if sessionStorage is super admin
			 if(sessionStorage.getItem('userName') == 'super'){
			     this.checkIFSuperAdmin = true;
			     console.log('super admin');
				 this.admin = 'Super';
		     } else{
			     this.checkIFSuperAdmin = false;
				 this.admin = 'Group';
		     }
			 this.getData();
		 }
     }
	 //getData
	 getData(){
		 this.userID = sessionStorage.getItem('userID');
	     this.username = sessionStorage.getItem('userName');
		 this.birthday = sessionStorage.getItem('birthday');
		 this.age = sessionStorage.getItem('age');
		 this.email = sessionStorage.getItem('email');
	 }
=======
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
>>>>>>> 0e0bcc87af02ceb835be39578bf524bd7267fb4f
	 //Sign In
	 signin(){	 
         this.router.navigateByUrl('/login');
     } 
	 //Logout User
     logout(){	 	
         //clear storage	 
	     sessionStorage.clear();
		 localStorage.clear();
<<<<<<< HEAD
=======
>>>>>>> UserService
>>>>>>> 0e0bcc87af02ceb835be39578bf524bd7267fb4f
		 this.router.navigateByUrl('/login');
     }
}
