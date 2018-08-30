import { Injectable } from '@angular/core';
<<<<<<< HEAD
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {Observable, of} from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class UserService{
  	 const httpOptions = {
         headers: new HttpHeaders({ 'Content-Type': 'application/json' })
     };
     constructor(private http:HttpClient){
		 
	 }		
	 
	 getUsers(){
		 return this.http.get('http://localhost:3000/api/auth');
	 }
	 
	 createUser(users){
         var body = JSON.stringify(users);
         return this.http.post('/api/auth/', body, httpOptions);
     }
	 
	 updateUser(users){
         var body = JSON.stringify(users);
         return this.http.post('/api/auth/' + user.id, body, httpOptions);
     }
	 
	 deleteUser(users){
         return this.http.delete('/api/auth/' + user.id);
     }
=======
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
	 checking:string;
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
         return this.http.post('/api/auth/', body, httpOptions);
     }
	 //Update Users
	 public updateUser(user){
         var body = JSON.stringify(user);
         return this.http.post('/api/auth/' + user.userID, body, httpOptions);
     }
	 //Delete Users
	 public deleteUser(user){
         return this.http.delete('/api/auth/' + user.userID);
     }
	 //Login Users
	 public loginUser(username:string, email:string){
		 return this.http.post('/api/auth', {username: username, email: email});
	 }
>>>>>>> UserService
}
