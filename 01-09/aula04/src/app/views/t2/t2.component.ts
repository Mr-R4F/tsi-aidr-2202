import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-t2',
  templateUrl: './t2.component.html',
  styleUrls: ['./t2.component.css']
})
export class T2Component implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  result = 'result';

  soma(num1: number, num2: number) {
    return num1 + num2;
  }
}
