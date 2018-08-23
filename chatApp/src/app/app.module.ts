import { FormsModule } from '@angular/forms'; //for form
import { HttpModule } from '@angular/http'; //for http
import { SocketService } from './socket/socket.service'; //for created service
import { UserService } from './user/user.service';  //for create user
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AccountComponent } from './account/account.component';
import { MenuComponent } from './menu/menu.component';
import { LoginComponent } from './login/login.component';
import { ChatComponent } from './chat/chat.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { UserComponent } from './user/user.component';
import { SocketComponent } from './socket/socket.component';

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
  ],
  providers: [SocketService],
  bootstrap: [AppComponent]
})
export class AppModule { }
