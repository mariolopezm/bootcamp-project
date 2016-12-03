import { ButtonType } from './shared/button/button.component';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css']
})
export class CalculatorComponent implements OnInit {
Primary:ButtonType= ButtonType.Primary;
Success:ButtonType= ButtonType.Success;
Warning:ButtonType= ButtonType.Warning;
Danger:ButtonType= ButtonType.Danger;
expression:string="";
  constructor() { }

  ngOnInit() {
  }

  printValue(value:string){
    this.expression += value;
  }

}