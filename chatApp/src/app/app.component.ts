import { Component } from '@angular/core';
//Component
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
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
		 }
     }
}
