import { Component } from '@angular/core';
<<<<<<< HEAD

=======
//Component
>>>>>>> UserService
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
<<<<<<< HEAD

export class AppComponent{
     title = 'chatApp';
     ngOnInit(){
         console.log('testing if dome is ready');
		 if(typeof(Storage) !== 'undefined'){
			 console.log('storage ready');
         }else{
			 //Sorry no web storage support..
=======
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
>>>>>>> UserService
		 }
     }
}
