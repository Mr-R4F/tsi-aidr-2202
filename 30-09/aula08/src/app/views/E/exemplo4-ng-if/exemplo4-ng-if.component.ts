import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-exemplo4-ng-if',
  templateUrl: './exemplo4-ng-if.component.html',
  styleUrls: ['./exemplo4-ng-if.component.css']
})
export class Exemplo4NgIfComponent implements OnInit {

  num1 = 0;
  num2 = 0;
  resultado = 0;

  constructor() { }

  ngOnInit(): void {
  }

  sum() {
    this.resultado = this.num1 + this.num2;
  }

  sub() {
    this.resultado = this.num1 - this.num2;
  }

  mult() {
    this.resultado = this.num1 * this.num2;
  }

  div() {
    this.resultado = this.num1 / this.num2;
  }

}
