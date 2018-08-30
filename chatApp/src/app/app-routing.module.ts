import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
<<<<<<< HEAD
>>>>>>> UserService

import { LoginComponent } from './login/login.component';
import { AccountComponent } from './account/account.component';
import { ChatComponent } from './chat/chat.component';


const routes: Routes = [
     {path:'login', component:LoginComponent},
     {path:'account', component:AccountComponent},
	 {path:'chat', component:ChatComponent}
];

=======
<<<<<<< HEAD
=======
>>>>>>> 0e0bcc87af02ceb835be39578bf524bd7267fb4f
>>>>>>> UserService
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
<<<<<<< HEAD
>>>>>>> UserService
=======
<<<<<<< HEAD
=======
>>>>>>> UserService
>>>>>>> 0e0bcc87af02ceb835be39578bf524bd7267fb4f
>>>>>>> UserService
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
<<<<<<< HEAD
<<<<<<< HEAD
=======
//Class AppRou'Module
>>>>>>> UserService
=======
//Class AppRou'Module
=======
<<<<<<< HEAD
=======
//Class AppRou'Module
>>>>>>> UserService
>>>>>>> 0e0bcc87af02ceb835be39578bf524bd7267fb4f
>>>>>>> UserService
export class AppRoutingModule{
}