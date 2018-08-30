import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
<<<<<<< HEAD

import { LoginComponent } from './login/login.component';
import { AccountComponent } from './account/account.component';
import { ChatComponent } from './chat/chat.component';


const routes: Routes = [
     {path:'login', component:LoginComponent},
     {path:'account', component:AccountComponent},
	 {path:'chat', component:ChatComponent}
];

=======
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
>>>>>>> UserService
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
<<<<<<< HEAD
=======
//Class AppRou'Module
>>>>>>> UserService
export class AppRoutingModule{
}