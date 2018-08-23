import { FormsModule } from '@angular/forms'; //for form
import { HttpModule } from '@angular/http'; //for http
import { SocketService } from './socket.service'; //for created service
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AccountComponent } from './account/account.component';
import { MenuComponent } from './menu/menu.component';
import { LoginComponent } from './login/login.component';
import { ChatComponent } from './chat/chat.component';
import { NotfoundComponent } from './notfound/notfound.component';

@NgModule({
  declarations: [
    AppComponent,
    AccountComponent,
    MenuComponent,
    LoginComponent,
    ChatComponent,
    NotfoundComponent
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
