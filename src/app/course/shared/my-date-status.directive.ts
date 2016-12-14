import { Directive, ElementRef, Input } from '@angular/core';

@Directive({
  selector: '[appMyDateStatus]'
})
export class MyDateStatusDirective {

  constructor(private el: ElementRef) {
      this.setStatusColor();
  }

  @Input('date') date: string;

  ngOnChanges() {
    this.setStatusColor();
  }

  setStatusColor() {
    let currentDate = new Date();
    let courseDate = new Date(this.date); 
    let daysDiff = Math.ceil((courseDate.getTime() - currentDate.getTime()) / (1000 * 3600 * 24));
    if (daysDiff > 30) {
      this.el.nativeElement.style.backgroundColor = 'green';
    } else if (daysDiff < 30 && daysDiff > 0) {
      this.el.nativeElement.style.backgroundColor = 'yellow';
    } else {
      this.el.nativeElement.style.backgroundColor = 'red';
    }
  }

}
