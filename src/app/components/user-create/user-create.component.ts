import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {User} from "../../model/user";
import {ActivatedRoute, Router} from "@angular/router";
import {NzModalService, NzNotificationService} from "ng-zorro-antd";
import {Location} from '@angular/common';
import {UserService} from "../../service/user.service";

@Component({
  selector: 'app-user-create',
  templateUrl: './user-create.component.html',
  styleUrls: ['./user-create.component.scss']
})
export class UserCreateComponent implements OnInit {
  user: User = new User();
  userForm: FormGroup;
  userId: String;
  btnloading: boolean;
  constructor(
    private fb: FormBuilder,
    private notification: NzNotificationService,
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private modal: NzModalService,
    private location: Location,
    private userService:UserService
  ) {

  }

  ngOnInit(): void {
    this.userId = this.activatedRoute.snapshot.paramMap.get('id');
    if(this.userId.length>0){
      this.userService.getUser(this.userId).subscribe((data:User)=>{
        this.user = data["data"];
        this.initForm();
      })
    }else{
      this.initForm();
    }
  }

  initForm(){
    this.userForm = this.fb.group({
      id: [this.user.id],
      firstName: [this.user.first_name, [Validators.required, Validators.maxLength(60)]],
      lastName: [this.user.last_name,[Validators.required, Validators.maxLength(60)]],
      email:[this.user.email,[Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$")]]
  });}


  back() {
    this.location.back();
  }

  confirmCreate(){
   let body = {"first_name":this.userForm.get('firstName').value,
    "last_name":this.userForm.get("lastName").value,
    "email": this.userForm.get("email").value}

    if(this.userId){
      this.userService.updateUser(body,this.userId).subscribe({
        next: (data:any)=>{
          // @ts-ignore
          this.notification.success('success', 'Update Succesful', `User ${data.first_name} updated`);
          this.router.navigateByUrl("/");
        },
        error:()=>{
          this.notification.error('Error', 'Error updating user');
        }
      })
    }else{
      this.userService.createUser(body).subscribe({
        next: (data:any)=>{
          // @ts-ignore
          this.notification.success('success', 'Created Succesful', `User ${data.first_name} created`);
          this.router.navigateByUrl("/");
        },
        error:()=>{
          this.notification.error('Error', 'Error creating user');
        }
      })
    }

  }
}
