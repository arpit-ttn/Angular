import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { RegisterService } from 'src/app/services/register.service';
import { PasswordValidator } from 'src/app/shared/password.validator';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  createUser:FormGroup;

  get Name(){
    return this.createUser.get('Name');
  }

  get Email(){
    return this.createUser.get('Email');
  }

  constructor( private fb : FormBuilder,private reg:RegisterService) { }

  ngOnInit(){
    this.createUser = this.fb.group({
      Name:['',[Validators.required ,Validators.minLength(3)]],
      Email:['',[Validators.required,Validators.email]],
      password:[''],
      confirmPassword:[''],
      address:this.fb.group({
        city:[''],
        state:[''],
        postalCode:['']
      })
    }, {validator:PasswordValidator});
  }
  regUser(){
    console.log(this.createUser.value);
    this.reg.createUser(this.createUser.value)
      .subscribe((result)=> {
        console.log(result, "data created");
      })
  }

}
