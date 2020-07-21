import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HttpComponent} from './http/http.component';
import {UserComponent} from './user/user.component';
import{ParentComponent} from './parent/parent.component';
import{ChildComponent} from './child/child.component';
import{ LoginComponent} from './login/login.component';
import{ HomepageComponent} from './homepage/homepage.component';
import{ GoairComponent} from './goair/goair.component';

const routes: Routes = [
  { path: 'http', component: HttpComponent },
  { path: 'user', component: UserComponent },
  { path: 'parent', component: ParentComponent },
  { path: 'child', component: ChildComponent },
  { path: 'login', component: LoginComponent },
  { path: 'home', component: HomepageComponent },
  { path: 'go', component: GoairComponent }

  
  

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
