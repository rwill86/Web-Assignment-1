import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import * as io from 'socket.io-client';
<<<<<<< HEAD
=======
<<<<<<< HEAD

@Injectable({
  providedIn: 'root'
})
export class SocketService {
     private url = 'http://localhost:3000';
     private socket;
     constructor(){ 
	     this.socket = io(this.url);
	 }
	 
	 ngOnInit(){
		 
	 }
	 
	 public sendMessages(message){
		 this.socket.emit('add-message', message);
	 }
	 
=======
>>>>>>> 0e0bcc87af02ceb835be39578bf524bd7267fb4f
//Injectable
@Injectable({
  providedIn: 'root'
})
//Class SocketService
export class SocketService{
     private url = 'http://localhost:3000';
     private socket;
	 //Constructor
     constructor(){ 
	     this.socket = io(this.url);
	 }
	 //Init
	 ngOnInit(){		 
	 }
	 //Send Messages
	 public sendMessages(message){
		 this.socket.emit('add-message', message);
	 }
	 //Get Messages
<<<<<<< HEAD
=======
>>>>>>> UserService
>>>>>>> 0e0bcc87af02ceb835be39578bf524bd7267fb4f
	 public getMessages = () => {
         return Observable.create((observer) => {
             this.socket.on('message', (message) => {
                 observer.next(message);
             });
         });
     }
}