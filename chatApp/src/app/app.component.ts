import { Component } from '@angular/core';
<<<<<<< HEAD
<<<<<<< HEAD
=======
//Component
=======
<<<<<<< HEAD
>>>>>>> UserService

=======
//Component
>>>>>>> UserService
<<<<<<< HEAD
=======
>>>>>>> 0e0bcc87af02ceb835be39578bf524bd7267fb4f
>>>>>>> UserService
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
<<<<<<< HEAD
>>>>>>> UserService

export class AppComponent{
     title = 'chatApp';
     ngOnInit(){
         console.log('testing if dome is ready');
		 if(typeof(Storage) !== 'undefined'){
			 console.log('storage ready');
         }else{
			 //Sorry no web storage support..
=======
<<<<<<< HEAD
=======
>>>>>>> 0e0bcc87af02ceb835be39578bf524bd7267fb4f
>>>>>>> UserService
//Class AppComponent
export class AppComponent{
	 //Title
     title = 'chatApp';
	 //Init
     ngOnInit(){
         console.log('testing if dome is ready.');
		 if(typeof(Storage) !== 'undefined'){
			 console.log('storage ready.');
         }else{
			 console.log('Sorry no web storage support.');
<<<<<<< HEAD
>>>>>>> UserService
=======
<<<<<<< HEAD
=======
>>>>>>> UserService
>>>>>>> 0e0bcc87af02ceb835be39578bf524bd7267fb4f
>>>>>>> UserService
		 }
     }
}
