import { style } from '@angular/animations';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-square',
  template: `
  <button nbButton *ngIf="!value"
  style="height: 200px;
   width: 200px;
   font-size:80px;
   ">{{ value }}</button>
     <button  nbButton hero status="success" *ngIf="value== 'X' "
  style="height: 200px;
   width: 200px;
   font-size:80px;
   ">{{ value }}</button>
   <button  nbButton hero status="success" *ngIf="value== 'O' "
  style="height: 200px;
   width: 200px;
   font-size:80px;
   ">{{ value }}</button>
  `,
  styles:[]
})
export class SquareComponent {
  @Input()
  value: 'X' | 'O' | undefined;
}
