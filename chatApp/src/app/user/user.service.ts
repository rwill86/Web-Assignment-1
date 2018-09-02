import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';
//import { User } from '../user/user.model';
//HttpOptions
const httpOptions = {
     headers: new HttpHeaders({'Content-Type': 'application/json'})
};
//Injectable
@Injectable({
     providedIn: 'root'
})
//Class UserService
export class UserService{
	 //Constructor
     public constructor(private http:HttpClient){		 
	 }		 
	 //Get Users
	 public getUsers(){
		 return this.http.get('http://localhost:3000/api/users');
	 }
	 //Update Users
	 public updateUser(user){
         var body = JSON.stringify(user);
         return this.http.put('http://localhost:3000/api/user/' + user.userID, body, httpOptions);
     }
	 //Delete Users
	 public deleteUser(user){
         return this.http.delete('http://localhost:3000/api/user/' + user.userID);
     }
	 //Login Users
	 public loginUser(username:string, email:string){
		 var a = 'http://localhost:3000/api/auth?username=' + username + '&email=' + email; 
		 return this.http.get(a);
	 }
	 //reg User
	 public regiUser(username:string, email:string){
		 var a = 'http://localhost:3000/api/reg?username=' + username + '&email=' + email; 
		 return this.http.get(a);
	 }
}
