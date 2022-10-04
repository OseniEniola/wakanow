import {Component, OnDestroy, OnInit} from '@angular/core';
import {User} from "../../model/user";
import {UserService} from "../../service/user.service";
import {untilDestroyed} from 'ngx-take-until-destroy';
import {Router} from "@angular/router";

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit, OnDestroy{
  pinBannerFlag=true;
  users:User[]= [];
  displayPinnedContainer = true;
  hidePinned = false;
  hideList = false;
  isLoading =true
  page:number =1
  pageSize :number = 0;
  total:number =0;
  pinnedReloading = false;
  busy = false;
  constructor(private userService: UserService,
              private route: Router) { }

  ngOnInit(): void {
    this.getUsers(this.page);
  }
  getUsers(page:number){
      this.userService.getAllUsers(page).subscribe((user:User[])=>{
        this.users = user["data"];
        this.page = user['page'];
        this.pageSize = user['per_page']
        this.total = user['total']
        this.isLoading = false
      })
  }
  ngOnDestroy(): void {
  }



  pagination(reset: boolean = false) {
    if (reset) {
      this.page = 1;
    }
   this.getUsers(this.page);
  }
  delete(id:number){
    this.userService.deleteUser(id);
  }
  updateUser(id:number){
    this.route.navigateByUrl(`/user-update/${id}`)
  }
}
