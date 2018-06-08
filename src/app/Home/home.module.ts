import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home.component';
import { EmployeeDetailComponent } from '../Employee/emp-details.component';
import { EmployeeModule } from '../Employee';

const routes: Routes = [
    { path: 'Home', component: HomeComponent },
];
@NgModule({
    declarations: [
        HomeComponent
    ],
    imports: [
        BrowserModule,
        EmployeeModule,
        RouterModule.forChild(routes)
    ],
    providers: [],

})
export class HomeModule { }
