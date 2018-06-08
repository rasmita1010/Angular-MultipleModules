import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {EmployeeComponent} from './emp.component';
import {EmployeeDetailComponent} from './emp-details.component';

const routes: Routes = [
  { path: 'Employee', component: EmployeeComponent },
];
@NgModule({
  declarations: [   
    EmployeeComponent,
    EmployeeDetailComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forChild(routes) 
  ],
  providers: [],
  exports: [EmployeeDetailComponent]
  
})
export class EmployeeModule { }
