import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appStartDateStatus]'
})
export class StartDateStatusDirective {

  constructor(private el: ElementRef) { }

}
