import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserListComponent } from './components/user-list/user-list.component';
import {StatusBadgeComponent} from './components/status-badge/status-badge.component'
import {NgZorroAntdModule} from "ng-zorro-antd";
import { NzPaginationModule } from 'ng-zorro-antd/pagination';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from "@angular/common/http";
import { UserCreateComponent } from './components/user-create/user-create.component';
import {FormErrorComponent} from './components/form-error/form-error.component';
import {FormGroupComponent} from './components/form-group/form-group.component';
@NgModule({
  declarations: [
    AppComponent,
    UserListComponent,
    StatusBadgeComponent,
    UserCreateComponent,
    FormErrorComponent,
    FormGroupComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgZorroAntdModule,
    NzPaginationModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
