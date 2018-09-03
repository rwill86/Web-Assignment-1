import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from './user.service';
//Component
@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
//Class UserComponent
export class UserComponent implements OnInit{
     public users; 
	 public username:string = '';
     public email:string = '';
	 public admin:string;
     public checkIFSuperAdmin:boolean = false;	 	 
	 public login:boolean = false;
	 //Constructor
     public constructor(private router:Router, private form:FormsModule, private userServ:UserService){
     }
     //Init
     public ngOnInit(){
		 this.getUsers();
		 if(!sessionStorage.getItem('userName')){
			 console.log('Not validated.');
			 sessionStorage.clear();
			 this.login = false;
			 //this.router.navigateByUrl('/login');
		 } else{
			 this.CheckAdmin();
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
	 //Check Admin
	 public CheckAdmin(){
		 //Check if sessionStorage is super admin
		 if(sessionStorage.getItem('userName') == 'Super' || sessionStorage.getItem('userName') == 'super'){
			 this.checkIFSuperAdmin = true;
			 console.log('super admin');
			 this.admin = 'Super';
		 } else{
		     this.checkIFSuperAdmin = false;
			 console.log('group admin');
		     this.admin = 'Group';
		 }
	 }
	 //Get User
	 public getUsers(){
		 this.userServ.getUsers().subscribe(
		     data => {
				 this.users = data;
			 },
			 err => console.error(err),
             () => console.log('done loading users')			 
		 );
	 }
     //Create User
	 public createUser(username, email){
		 var ug = document.getElementById('username');
		 var eg =  document.getElementById('email');
		 var fa = document.getElementById('fail');
		 //check if inputs are not null
         if(this.username !== '' || this.email !== ''){
			 this.userServ.regiUser(this.username, this.email).subscribe(
			     data => { 
				     console.log(data);
				     if(data.hasOwnProperty('success') == true){
					 //if(data.success){ 
                         this.getUsers();
				         console.log('User is created in json');
				         this.username = '';
                         this.email = '';
                         return true;
					 } else{
						 eg.style.border = '2px solid #C70039';
			             ug.style.border = '2px solid #C70039';
					     fa.innerHTML = 'UserName or Email already exist.';
					 }
                 },
                 err => {
				     eg.style.border = '2px solid #C70039';
			         ug.style.border = '2px solid #C70039';
					 fa.innerHTML = 'Error with Username and Email.';
                     console.log(err);
                 }
			 );
		 } else{
			 eg.style.border = '2px solid #C70039';
			 ug.style.border = '2px solid #C70039';
			 fa.innerHTML = 'UserName and Email are empty.';
		 }
	 }
	 //Update User
	 public updateUser(user){
		 this.userServ.updateUser(user).subscribe(
             data => { 
                 this.getUsers();
				 console.log('Saving a user.');
                 return true;
             },
             err => {
                 console.error('Error Saving a User.');
             }
         );
	 }	
	 //Delete User
	 public deleteUser(user){
		 this.userServ.deleteUser(user).subscribe(
             data => { 
                 this.getUsers();
				 console.log('Deleting a user.');
                 return true;
             },
             err => {
                 console.error('Error Deleting a User.');
             }
         );
	 }
     //Sign In
	 public signin(){	 
         this.router.navigateByUrl('/login');
     } 	 
}
