import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from '../user/user.service';
export interface data{
     //title: string;
     //description: string;
     success: boolean;
}
//Component
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
//Class LoginComponent
export class LoginComponent implements OnInit{
     public username:string = '';
     public email:string = '';
	 public userID:string = '';
	 public birthday:string = '';
	 public age:string = '';
	 public login:boolean = false;
	 //Constructor
     public constructor(private router:Router, private form:FormsModule, private userServ:UserService){ 
	 }
     //Init 
     public ngOnInit(){
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
     }
     //Login User 
	 public loginUser(event){
	     event.preventDefault();
		 var message = document.getElementById('message');
		 var ug = document.getElementById('username');
		 var eg =  document.getElementById('email');
		 var fa = document.getElementById('fail');		 
		 //check if inputs are not null
         if(this.username !== '' || this.email !== ''){
		     this.userServ.loginUser(this.username, this.email).subscribe(
		         data => {
					 console.log(data);
					 if(data.hasOwnProperty('success') == true){
				     //if(data.success){
						 //this.userID = data.userID;
						 //this.birthday = data.birthday;
						 //this.age = data.age;
				         localStorage.setItem('userName', this.username);
				         sessionStorage.setItem('userName', this.username);
				         sessionStorage.setItem('email', this.email);
					     sessionStorage.setItem('userID', this.userID);
					     sessionStorage.setItem('birthday', this.birthday);
					     sessionStorage.setItem('age', this.age);
				         console.log('User is Login');
				         eg.style.border = '';
			             ug.style.border = '';
				         this.router.navigateByUrl('/account');
					 } else{
						 eg.style.border = '2px solid #C70039';
			             ug.style.border = '2px solid #C70039';
				         console.log('UserName and Email were incorrect. \nUserName:' + this.username + '\nEmail:' + this.email);
				         fa.innerHTML = 'UserName and Email were incorrect.';
				         this.login = false;
					 }
			     },
			     error => {
					 console.log('error');
				     eg.style.border = '2px solid #C70039';
			         ug.style.border = '2px solid #C70039';
				     fa.innerHTML = 'Error with input.';
				     this.login = false;
			     }
	         );
		 } else{
			 eg.style.border = '2px solid #C70039';
			 ug.style.border = '2px solid #C70039';
		     console.log('UserName and Email were incorrect. \nUserName:' + this.username + '\nEmail:' + this.email);
		     fa.innerHTML = 'UserName and Email are empty.';
		     this.login = false;
		 }
     }
	 //Logout User
	 public logout(){	 	 
	     //clear storage	
	     sessionStorage.clear();
		 localStorage.clear();
		 location.reload();
     }
}
