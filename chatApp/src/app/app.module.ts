import { FormsModule } from '@angular/forms'; //for form
import { HttpModule } from '@angular/http'; //for http
<<<<<<< HEAD
=======
<<<<<<< HEAD
import { SocketService } from './socket/socket.service'; //for created service
import { UserService } from './user/user.service';  //for create user
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

=======
>>>>>>> 0e0bcc87af02ceb835be39578bf524bd7267fb4f
import { SocketService } from './socket/socket.service'; //for socket service
import { UserService } from './user/user.service';  //for user service
import { HttpClientModule } from '@angular/common/http'; 
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
//Componets
<<<<<<< HEAD
=======
>>>>>>> UserService
>>>>>>> 0e0bcc87af02ceb835be39578bf524bd7267fb4f
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
=======
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
>>>>>>> 0e0bcc87af02ceb835be39578bf524bd7267fb4f
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
<<<<<<< HEAD
=======
>>>>>>> UserService
>>>>>>> 0e0bcc87af02ceb835be39578bf524bd7267fb4f
  ],
  providers: [SocketService],
  bootstrap: [AppComponent]
})
<<<<<<< HEAD
//Class AppModule
export class AppModule{
}
=======
<<<<<<< HEAD
export class AppModule { }
=======
//Class AppModule
export class AppModule{
}
>>>>>>> UserService
>>>>>>> 0e0bcc87af02ceb835be39578bf524bd7267fb4f
