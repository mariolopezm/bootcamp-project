import { Employee } from './employee';
import { Injectable } from '@angular/core';

@Injectable()
export class EmployeeService {

  employeeList:Employee[] = [
      new Employee(1, "Girafales", "Profesor", 50), 
      new Employee(2, "Chaparron", "Bonaparte", 45),
      new Employee(3, "Chimoltrufia", "Empleada", 33),
      new Employee(4, "Chapulin", "Heroe", 24),
      new Employee(8, "Chavo", "Canson", 8),
      new Employee(5, "Kiko", "Mas canson", 9)];

  constructor() { }

  getEmployeeList():Employee[]{
    return this.employeeList;
  }

  getEmployeeById(id: number):Employee{
    return this.employeeList.find(myObj => myObj.id == id);
  }
}
