import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from '../user/user.service';
//Component
@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})
//Class AccountComponent
export class AccountComponent implements OnInit{
     public userID:string;
	 public username:string;
	 public birthday:string;
	 public email:string;
	 public admin:string
	 public age:string;
	 public login:boolean = false;
	 public checkIFSuperAdmin:boolean = false;	 	
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
	 //Sign In
	 signin(){	 
         this.router.navigateByUrl('/login');
     } 
	 //Logout User
     logout(){	 	
         //clear storage	 
	     sessionStorage.clear();
		 localStorage.clear();
		 this.router.navigateByUrl('/login');
     }
}
