import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent implements OnInit {
  username="";
  JsonData=[
    '{id=1,name=Arpit,competancy= .Net}',
    '{id=2,name=Suraj,competancy= JVM}',
    '{id=3,name=Ashutosh,competancy= MEAN}',
    '{id=4,name=Abhishek,competancy= .NET}',
    '{id=5,name=Vijay,competancy=FEAN}'
  ];

  log=[];

  showData= false;
  constructor() { }

  ngOnInit(): void {
  }
  onToggleDetails(){
    this.showData=!this.showData;
    
    this.log.push(this.JsonData);

  }

}
