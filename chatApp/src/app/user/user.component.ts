import { Component, OnInit } from '@angular/core';
import { UserService } from './user.service';
<<<<<<< HEAD

=======
//Component
>>>>>>> UserService
@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
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
		 var user = {
			 username: username,
			 email: email
		 }
		 this.userServ.createUser(user).subscribe(
		     data => { 
                 this.getUsers();
                 return true;
             },
             err => {
                 console.error(err);
             }
		 );
	 }
	 //Update User
	 updateUser(user){
		 this.userServ.updateUser(user).subscribe(
>>>>>>> UserService
             data => { 
                 this.getUsers();
                 return true;
             },
             err => {
<<<<<<< HEAD
                 console.error(err);
=======
                 console.error('Error Saving User.');
>>>>>>> UserService
             }
         );
	 }	 
}
