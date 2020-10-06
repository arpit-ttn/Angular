import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule ,routingComponents} from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ChildComponent } from './child/child.component';

//import { EmployeeListComponent } from './employee-list/employee-list.component';
// import { DepartmentListComponent } from './department-list/department-list.component';
// import { DepartmentDetailsComponent } from './department-details/department-details.component';
// import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ChildComponent,
    routingComponents,
 
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
