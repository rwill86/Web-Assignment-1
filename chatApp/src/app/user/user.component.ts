import { Component, OnInit } from '@angular/core';
<<<<<<< HEAD
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from './user.service';
//Component
=======
import { UserService } from './user.service';
<<<<<<< HEAD

=======
//Component
>>>>>>> UserService
>>>>>>> 0e0bcc87af02ceb835be39578bf524bd7267fb4f
@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
<<<<<<< HEAD
//Class UserComponent
export class UserComponent implements OnInit{
     users; 
	 username:string = '';
     email:string = '';
     checkIFSuperAdmin:boolean = false;	 	 
	 login:boolean = false;
	 //Constructor
     constructor(private router:Router, private form:FormsModule, private userServ: UserService){
=======
<<<<<<< HEAD
export class UserComponent implements OnInit{
     users;     
     constructor(private userServ: UserService){
	 }

     ngOnInit(){
		 this.getUsers();
     }
	 
	 getUsers(){
		 this.userServ.getUsers().subscribe(
		     data => {this.user = data}.
			 err => console.error(err),
			 () = > console.log('done loading')
		 );
	 }
	 
	 createUser(username, password){
		 var user = {
			 username: username,
			 passowrd: password
		 }
	 }
	 
	 updateUser(user){
		 this.userServ.updateStudent(users).subscribe(
=======
//Class UserComponent
export class UserComponent implements OnInit{
     users; 
     checkIFSuperAdmin:boolean;	 
	 checkIFGroupAdmin:boolean;	 
	 login:boolean = false;
	 //Constructor
     constructor(private userServ: UserService){
>>>>>>> 0e0bcc87af02ceb835be39578bf524bd7267fb4f
	 }
     //Init
     ngOnInit(){
		 this.getUsers();
		 if(!sessionStorage.getItem('userName')){
			 console.log('Not validated.');
			 sessionStorage.clear();
			 this.login = false;
			 //this.router.navigateByUrl('/login');
		 } else{
			  //Check if sessionStorage is super admin
			 if(sessionStorage.getItem('userName') == 'super'){
			     this.checkIFSuperAdmin = true;
			     console.log('super admin');
		     } else{
			     this.checkIFSuperAdmin = false;
		     }
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
     }
	 //Get User
	 getUsers(){
		 this.userServ.getUsers().subscribe(
		     data => {
				 this.users = data;
			 },
			 err => {
				 console.error(err);
			 }	 
		 );
	 }
	 //Create User
	 createUser(username, email){
<<<<<<< HEAD
		 var ug = document.getElementById('username');
		 var eg =  document.getElementById('email');
		 var fa = document.getElementById('fail');
		 //user
=======
>>>>>>> 0e0bcc87af02ceb835be39578bf524bd7267fb4f
		 var user = {
			 username: username,
			 email: email
		 }
		 this.userServ.createUser(user).subscribe(
		     data => { 
                 this.getUsers();
<<<<<<< HEAD
				 console.log('User is created');
				 this.username = '';
                 this.email = '';
                 return true;
             },
             err => {
				 eg.style.border = '2px solid #C70039';
			     ug.style.border = '2px solid #C70039';
=======
                 return true;
             },
             err => {
>>>>>>> 0e0bcc87af02ceb835be39578bf524bd7267fb4f
                 console.error(err);
             }
		 );
	 }
	 //Update User
	 updateUser(user){
		 this.userServ.updateUser(user).subscribe(
<<<<<<< HEAD
=======
>>>>>>> UserService
>>>>>>> 0e0bcc87af02ceb835be39578bf524bd7267fb4f
             data => { 
                 this.getUsers();
                 return true;
             },
             err => {
<<<<<<< HEAD
                 console.error('Error Saving User.');
             }
         );
	 }	
	 //Delete User
	 deleteUser(user){
		 this.userServ.updateUser(user).subscribe(
             data => { 
                 this.getUsers();
                 return true;
             },
             err => {
                 console.error('Error Saving User.');
             }
         );
	 }
     //Sign In
	 signin(){	 
         this.router.navigateByUrl('/login');
     } 	 
=======
<<<<<<< HEAD
                 console.error(err);
=======
                 console.error('Error Saving User.');
>>>>>>> UserService
             }
         );
	 }	 
>>>>>>> 0e0bcc87af02ceb835be39578bf524bd7267fb4f
}
