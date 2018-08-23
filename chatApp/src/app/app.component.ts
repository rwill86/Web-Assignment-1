import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent{
     title = 'chatApp';
     ngOnInit(){
         console.log('testing if dome is ready');
		 if(typeof(Storage) !== 'undefined'){
			 console.log('storage ready');
         }else{
			 //Sorry no web storage support..
		 }
     }
}
