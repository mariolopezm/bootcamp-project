import { ButtonComponent } from './shared/button/button.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CalculatorComponent } from './calculator.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [CalculatorComponent, ButtonComponent],
  exports: [CalculatorComponent]
})
export class CalculatorModule { }
