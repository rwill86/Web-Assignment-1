import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})
export class AccountComponent implements OnInit {
     userID:string;
	 username:string;
	 birthday:string;
	 email:string;
	 age:string;
	 groupAdmin:boolean;
	 superAdmin:boolean;
     constructor(private router:Router, private form:FormsModule){ 
     }

     ngOnInit(){
		 if(!sessionStorage.getItem('userName')){
			 console.log('Not validated');
			 sessionStorage.clear();
		 } else{
			 this.userID = sessionStorage.getItem('userID');
			 this.username = sessionStorage.getItem('userName');
			 this.birthday = sessionStorage.getItem('birthday');
			 this.age = sessionStorage.getItem('age');
			 this.email = sessionStorage.getItem('email');
		 }
     }
	 
	 //groupAdmin(){
	 //}
	 
	 //superAdmin(){
	 //}
	 
	 signin(){	 
         this.router.navigateByUrl('/login');
     } 
	 
     logout(){	 	 
	     sessionStorage.clear();
		 this.router.navigateByUrl('/login');
     }
}
