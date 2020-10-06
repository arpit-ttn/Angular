import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
@Component({
  selector: 'app-department-list',
  templateUrl: './department-list.component.html',
  styleUrls: ['./department-list.component.css']
})
export class DepartmentListComponent implements OnInit {
   
  departments=[
    {"id": 1,"name":"Angular"},
    {"id": 2,"name":".Net"},
    {"id": 3,"name":"Java"},
    {"id": 4,"name":"React"},
    {"id": 5,"name":"Python"},
  ]
  constructor(private router:Router) { }

  ngOnInit(): void {
  }
  onSelect(department){
    this.router.navigate(['/departments', department.id]);
  }

}
