import { Component, OnInit, ViewChild } from '@angular/core';
import { ChildComponent } from '../child/child.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  userName = "Angular";

  @ViewChild(ChildComponent) child:ChildComponent;
  constructor() { }

  ngOnInit(): void {
  }
  changeProperty(){
      this.child.userName="Arpit";
  }
  callMethod(){
     this.child.clickMe();
  }

}
