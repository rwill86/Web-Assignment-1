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
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
<<<<<<< HEAD
=======
<<<<<<< HEAD

export class LoginComponent implements OnInit{
     username:string = '';
     email:string = '';
	 login:string;
     constructor(private router:Router, private form:FormsModule){ 
	 }

     ngOnInit(){
		 if(!sessionStorage.getItem('userName')){
			 sessionStorage.clear();
		 } else{
			 this.login = 'login'
		 }
     }
	 
=======
>>>>>>> 0e0bcc87af02ceb835be39578bf524bd7267fb4f
//Class LoginComponent
export class LoginComponent implements OnInit{
     username:string = '';
     email:string = '';
	 login:boolean = false;
	 //Constructor
     constructor(private router:Router, private form:FormsModule, private userServ:UserService){ 
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
     }
	 //Login User 
<<<<<<< HEAD
	 loginUser(event){
	     event.preventDefault();
		 var ug = document.getElementById('username');
		 var eg =  document.getElementById('email');
=======
>>>>>>> UserService
	 loginUser(event){
	     event.preventDefault();
		 var message = document.getElementById('message');
		 var ug = document.getElementById('username');
		 var eg =  document.getElementById('email');
<<<<<<< HEAD
	     if(this.email != '' || this.username != ''){
		     localStorage.setItem('loggedIn', '1');
			 localStorage.setItem('userName', this.username);
		     sessionStorage.setItem('userID', '1');
	         sessionStorage.setItem('userName', this.username);
	         sessionStorage.setItem('birthday', '11/08/1998');
			 sessionStorage.setItem('email', this.email);
		     sessionStorage.setItem('age', '20');
			 eg.style.border = '';
			 ug.style.border = '';
		     this.router.navigateByUrl('/account');
	     } else{
			 eg.style.border = '2px solid #C70039';
			 ug.style.border = '2px solid #C70039';
		     console.log('UserName and email were incorrect. \nUserName:' + this.username + '\nPassword:' + this.email);
		 }
     }
	 
	 logout(){	 	 
	     sessionStorage.clear();
=======
>>>>>>> 0e0bcc87af02ceb835be39578bf524bd7267fb4f
		 var fa = document.getElementById('fail');
		 
		 this.userServ.loginUser(this.username, this.email).subscribe(
		     data => {
				 localStorage.setItem('userName', this.username);
				 sessionStorage.setItem('userName', this.username);
				 sessionStorage.setItem('email', this.email);
				 console.log('User is Login');
				 eg.style.border = '';
			     ug.style.border = '';
				 this.router.navigateByUrl('/account');
			 },
			 error => {
				 eg.style.border = '2px solid #C70039';
			     ug.style.border = '2px solid #C70039';
				 console.log('UserName and Email were incorrect. \nUserName:' + this.username + '\nEmail:' + this.email);
				 fa.innerHTML = 'UserName and Email were incorrect.';
				 this.login = false;
			 }
	     );
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
		 location.reload();
     }
}
