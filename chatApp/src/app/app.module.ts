import { FormsModule } from '@angular/forms'; //for form
import { HttpModule } from '@angular/http'; //for http
import { SocketService } from './socket/socket.service'; //for socket service
import { UserService } from './user/user.service';  //for user service
import { HttpClientModule } from '@angular/common/http'; 
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
//Componets
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AccountComponent } from './account/account.component';
import { MenuComponent } from './menu/menu.component';
import { LoginComponent } from './login/login.component';
import { ChatComponent } from './chat/chat.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { UserComponent } from './user/user.component';
import { SocketComponent } from './socket/socket.component';
//NgModule
@NgModule({
  declarations: [
     AppComponent,
     AccountComponent,
     MenuComponent,
     LoginComponent,
     ChatComponent,
     NotfoundComponent,
     UserComponent,
     SocketComponent
  ],
  imports: [
     HttpClientModule,
     FormsModule,
	 HttpModule,
     BrowserModule,
     AppRoutingModule
  ],
  providers: [SocketService],
  bootstrap: [AppComponent]
})
//Class AppModule
export class AppModule{
}