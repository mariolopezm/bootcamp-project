import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

export enum ButtonType{
  Primary = 1,
  Success = 2,
  Warning = 3,
  Danger = 4
}

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css']
})
export class ButtonComponent implements OnInit {
  @Input() buttonType: ButtonType;
  @Input() value: string;
  @Output() eventBinding = new EventEmitter<string>();
  
  constructor() { }

  ngOnInit() {
  }

  isBtnSuccess():boolean{
      return this.buttonType == ButtonType.Success;
  }

  isBtnPrimary():boolean{
    return this.buttonType == ButtonType.Primary;
  }

  isBtnWarning():boolean{
    return this.buttonType == ButtonType.Warning;
  }
  
  isBtnDanger():boolean{
    return this.buttonType == ButtonType.Danger;
  }

  sendType(){
    console.log(this.value);
    this.eventBinding.emit(this.value);
  }
}
