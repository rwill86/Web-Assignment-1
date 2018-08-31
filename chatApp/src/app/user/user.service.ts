import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';
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
     constructor(private http:HttpClient){		 
	 }		 
	 //Get Users
	 public getUsers(){
		 return this.http.get('http://localhost:3000/api/auth');
	 }
	 //Create Users
	 public createUser(user){
         var body = JSON.stringify(user);
         return this.http.post('http://localhost:3000/api/auth/', body, httpOptions);
     }
	 //Update Users
	 public updateUser(user){
         var body = JSON.stringify(user);
         return this.http.post('http://localhost:3000/api/auth/' + user.userID, body, httpOptions);
     }
	 //Delete Users
	 public deleteUser(user){
         return this.http.delete('http://localhost:3000/api/auth/' + user.userID);
     }
	 //Login Users
	 public loginUser(username:string, email:string){
		 return this.http.post('http://localhost:3000/api/auth/', {username: username, email: email});
	 }
}
