import { style } from '@angular/animations';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  
  selector: 'app-square',
  template: `
  <style>
    button {
      height: 200px;
      width: 200px;
    }
    @media screen and (max-width: 800px) {
      button {
      height: 80px;
      width: 80px;
      }
    }
  </style>
  <button style="font-size:80px"  nbButton *ngIf="!value">{{ value }}</button>
     <button style="font-size:80px" nbButton hero status="success" *ngIf="value== 'X' ">{{ value }}</button>
   <button style="font-size:80px" nbButton hero status="success" *ngIf="value== 'O' ">{{ value }}</button>
  `,
  styles:[]
})
export class SquareComponent {
  @Input()
  value: 'X' | 'O' | undefined;
}
