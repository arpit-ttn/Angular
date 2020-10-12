import { Component, OnInit } from '@angular/core';
import { FormBuilder , FormGroup, Validators} from '@angular/forms';
import {forbiddenNameValidator} from './shared/user-name.validator';
import {PasswordValidator} from './shared/password.validator';
import {RegistrationService} from './registration.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  
  registrationForm:FormGroup;

  get userName(){
    return this.registrationForm.get('userName');
  }

constructor(private fb : FormBuilder, private _registrationService : RegistrationService ){}

ngOnInit(){
  this.registrationForm = this.fb.group({
    userName:['',[Validators.required ,Validators.minLength(3), forbiddenNameValidator]],
    email:[''],
    password:[''],
    confirmPassword:[''],
    address:this.fb.group({
      city:[''],
      state:[''],
      postalCode:['']
    })
  }, {validator:PasswordValidator});
}

  // registrationForm = new FormGroup({
  //   userName: new FormControl('Arpit'),
  //   email: new FormControl(''),
  //   password: new FormControl(''),
  //   confirmPassword:new FormControl(''),
  //   address:new FormGroup({
  //     city:new FormControl(''),
  //     state:new FormControl(''),
  //     postalCode:new FormControl(''),
  //   })
  // });

  loadApiData(){
    this.registrationForm.setValue({
      userName: 'Abhishek',
      email: 'as@test.com',
      password: 'test',
      confirmPassword: 'test',
      address:{
         city:'City',
         state: 'State',
         postalCode: '123456',}
    })
  }
  
onSubmit(){
  console.log(this.registrationForm.value);
  this._registrationService.register(this.registrationForm.value)
   .subscribe(
     response => console.log('success',response),
     error => console.log('error',error)
   );
}

}
