import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { HomeModule } from './Home/home.module';
import { EmployeeModule } from './Employee/emp.module';
import { AdminModule } from './Admin/admin.module';

const routes: Routes = [  
  { path: 'Home', loadChildren: './Home/home.module#HomeModule'},
  { path: 'Admin', loadChildren: './Admin/admin.module#AdminModule'},
  { path: 'Employee', loadChildren: './Employee/emp.module#EmployeeModule'},
];

@NgModule({
  declarations: [
    AppComponent,  
    // EmployeeDetailComponent  
  ],
  imports: [
    BrowserModule,
    HomeModule,
    EmployeeModule,
    AdminModule,    
    //RouterModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
