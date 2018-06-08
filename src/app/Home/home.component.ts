import { Component } from '@angular/core';
import EmployeeDetailComponent from 'emp-details.component';

@Component({
  selector: 'home',
  template:`<h1> From template</h1>`,
  templateUrl: './home.component.html', 
})
export class HomeComponent {
  title = 'Home component ';
}
