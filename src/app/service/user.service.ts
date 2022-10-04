import { Injectable } from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
import {Observable, Subscription} from 'rxjs';
import {Router} from "@angular/router";
import {NzNotificationService} from "ng-zorro-antd";
import {User} from "../model/user";


@Injectable({
  providedIn: 'root'
})
export class UserService {
  private path = `https://reqres.in/api`;
  constructor(private http: HttpClient,
              private router: Router, private notification: NzNotificationService) { }

   getAllUsers(page:number): Observable<any>{
     return this.http.get(`${this.path}/users?page=${page}`);
   }

   deleteUser(id:number){
    return this.http.delete(`${this.path}/users?page=${id}`).subscribe((user:User) =>{
      this.notification.info('success', 'Delete Succesful');
     })
   }

   getUser(id){
    return this.http.get(`${this.path}/users/${id}`)
   }

  createUser(body:any){
   return  this.http.post(`${this.path}/users`,JSON.stringify(body))
  }
  updateUser(body:any,id){
    return  this.http.put(`${this.path}/users/${id}`,JSON.stringify(body))
  }
}
