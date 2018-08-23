import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

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
	 
	 loginUser(event){
	     event.preventDefault();
		 var message = document.getElementById('message');
		 var ug = document.getElementById('username');
		 var eg =  document.getElementById('email');
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
		 location.reload();
     }
}
