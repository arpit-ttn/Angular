import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {
  userName='Default Value';
  constructor() { }

  ngOnInit(): void {
  }

  clickMe(){
   alert(this.userName);
  }

}
