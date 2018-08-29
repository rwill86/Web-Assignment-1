import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
//Componets
import { LoginComponent } from './login/login.component';
import { AccountComponent } from './account/account.component';
import { ChatComponent } from './chat/chat.component';
import { UserComponent } from './user/user.component';
import { NotfoundComponent } from './notfound/notfound.component';
//Routes Paths
const routes: Routes = [
     {path:'login', component:LoginComponent},
     {path:'account', component:AccountComponent},
	 {path:'chat', component:ChatComponent},
	 {path:'user', component:UserComponent},
	 {path:'404', component: NotfoundComponent},
	 {path:'', redirectTo:'/login', pathMatch: 'full'},
	 {path:'**', redirectTo:'404'}
];
//NgModule
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
//Class AppRou'Module
export class AppRoutingModule{
}