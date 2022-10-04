import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {UserListComponent} from './components/user-list/user-list.component';
import {UserCreateComponent} from "./components/user-create/user-create.component";

const routes: Routes = [
  {path: '', component: UserListComponent},
  {path: 'user-create', component: UserCreateComponent},
  {path: 'user-update/:id', component: UserCreateComponent},
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
