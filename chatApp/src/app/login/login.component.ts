import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from '../user/user.service';
//Component
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
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
	 loginUser(event){
	     event.preventDefault();
		 var message = document.getElementById('message');
		 var ug = document.getElementById('username');
		 var eg =  document.getElementById('email');
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
		 location.reload();
     }
}
