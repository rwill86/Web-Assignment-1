import { Component, OnInit } from '@angular/core';
import { UserService } from './user.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
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
             data => { 
                 this.getUsers();
                 return true;
             },
             err => {
                 console.error(err);
             }
         );
	 }	 
}
