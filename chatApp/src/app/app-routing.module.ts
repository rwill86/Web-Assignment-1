import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
//Componets
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { AccountComponent } from './account/account.component';
import { ChatComponent } from './chat/chat.component';
import { UserComponent } from './user/user.component';
import { NotfoundComponent } from './notfound/notfound.component';
//Routes Paths
const routes: Routes = [
     {path:'home', component:HomeComponent},
     {path:'login', component:LoginComponent},
     {path:'account', component:AccountComponent},
	 {path:'chat', component:ChatComponent},
	 {path:'user', component:UserComponent},
	 {path:'404', component:NotfoundComponent},
	 {path:'', redirectTo:'/home', pathMatch: 'full'},
	 {path:'**', redirectTo:'404'}
];
//NgModule
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
//Class AppRoutingModule
export class AppRoutingModule{
}