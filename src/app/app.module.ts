import { EmployeeService } from './employee.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { EmployeesComponent } from './employees/employees.component';
import { EmployeeComponent } from './employee/employee.component';

@NgModule({
  declarations: [
    AppComponent,
    EmployeesComponent,
    EmployeeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot([
      {
        path: 'employees/:id',
        component: EmployeeComponent
      },
      {
        path: 'employees',
        component: EmployeesComponent
      },
      {
        path: '',
        redirectTo: 'employees',
        pathMatch: 'full'
      },
      {
        path: '**',
        redirectTo: 'employees',
        pathMatch: 'full'
      }
    ])
  ],
  providers: [EmployeeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
