import { Component, OnInit } from '@angular/core';
import {  Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  email:string;
  password:any;

  constructor(private router:Router) { }

  ngOnInit(): void {
  }
  loginUser(){
    if(this.email == "ad@test.com" && this.password == "test@123"){
      this.router.navigateByUrl('/login');
    }
    else{
      alert("please enter valid details");
    }

  }
  registerUser(){
    this.router.navigateByUrl('/register');
  }

}
