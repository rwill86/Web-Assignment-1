import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
//Component
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
//Class HomeComponent
export class HomeComponent implements OnInit{
	 public login:boolean = false;
     //Constructor
     public constructor(private router:Router, private form:FormsModule){ 
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
			 } 	
         }			 
     }
	 //Sign In
	 public signin(){	 
         this.router.navigateByUrl('/login');
     } 
}
