import { Injectable } from '@angular/core';
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
}
