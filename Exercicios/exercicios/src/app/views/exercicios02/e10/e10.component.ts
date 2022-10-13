import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-e10',
  templateUrl: './e10.component.html',
  styleUrls: ['./e10.component.css']
})
export class E10Component implements OnInit {
  num1 = 0;
  num2 = 0;
  res = 0;

  constructor() { }

  ngOnInit(): void {
  }

  somar(nm1:number, nm2:number) {
    return  this.res = nm1 + nm2;
  }
}
