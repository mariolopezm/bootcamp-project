import { EmployeeService } from './../employee.service';
import { inject } from '@angular/core/testing';
import { Component, OnInit } from '@angular/core';
import {Employee} from './../Employee';


@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.css']
})
export class EmployeesComponent implements OnInit {

  constructor(private employeeService: EmployeeService) { }

  employees: Employee[];

  ngOnInit() {
    this.employees = this.employeeService.getEmployeeList();
  }
}
