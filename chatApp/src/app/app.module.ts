import { FormsModule } from '@angular/forms'; //for form
import { HttpModule } from '@angular/http'; //for http
<<<<<<< HEAD
import { SocketService } from './socket/socket.service'; //for created service
import { UserService } from './user/user.service';  //for create user
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

=======
import { SocketService } from './socket/socket.service'; //for socket service
import { UserService } from './user/user.service';  //for user service
import { HttpClientModule } from '@angular/common/http'; 
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
//Componets
>>>>>>> UserService
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AccountComponent } from './account/account.component';
import { MenuComponent } from './menu/menu.component';
import { LoginComponent } from './login/login.component';
import { ChatComponent } from './chat/chat.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { UserComponent } from './user/user.component';
import { SocketComponent } from './socket/socket.component';
<<<<<<< HEAD

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
    FormsModule,
	HttpModule,
    BrowserModule,
    AppRoutingModule
=======
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
>>>>>>> UserService
  ],
  providers: [SocketService],
  bootstrap: [AppComponent]
})
<<<<<<< HEAD
export class AppModule { }
=======
//Class AppModule
export class AppModule{
}
>>>>>>> UserService
