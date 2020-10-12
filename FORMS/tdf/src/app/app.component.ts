import { Component } from '@angular/core';
import { EnrollmentService } from './enrollment.service';
import { User } from './user';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  topics = ['.Net','React','Angular'];
  topicHasError=true;

  userModel = new User('AD','a@test.com',1234567890,'default','morning');
  constructor(private _enrollmentService: EnrollmentService){

  }
  
  validateTopic(value){
    if(value === 'default'){
      this.topicHasError =true;
    }else{
      this.topicHasError =false;
    } 
  }
  onSubmit(){
    this._enrollmentService.enroll(this.userModel)
    .subscribe(
      data => console.log('success!',data),
      error => console.error('Error!',error)
    )
  }

}


