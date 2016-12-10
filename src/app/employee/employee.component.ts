import { EmployeeService } from './../employee.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import {Employee} from './../Employee';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {

  employeeId: number;
  employee: Employee;

  constructor(private route: ActivatedRoute, private employeeService: EmployeeService) { }

  ngOnInit() {
    this.route.params.forEach((params: Params) => this.employeeId = params["id"]);
    this.employee = this.employeeService.getEmployeeById(this.employeeId);
  }

}
