import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-e2',
  templateUrl: './e2.component.html',
  styleUrls: ['./e2.component.css']
})
export class E2Component implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  somar(num1:number, num2:number) {
    return num1 + num2;
  }
}
