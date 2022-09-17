import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-e1',
  templateUrl: './e1.component.html',
  styleUrls: ['./e1.component.css']
})
export class E1Component implements OnInit {

  val1 = 0;
  val2 = 0;

  constructor() { }

  ngOnInit(): void {
  }

  mult(val1:number, val2: number) {
    return val1 * val2;
  }
}
