import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-t10',
  templateUrl: './t10.component.html',
  styleUrls: ['./t10.component.css']
})
export class T10Component implements OnInit {

  //string para colocar números grandes (sem somar)
  val1 = '';
  val2 = '';
  resul = 0;

  constructor() { }

  ngOnInit(): void {
  }

  atribuirVal1(val: string) {
    this.val1 += val;
  }

  atribuirVal2(val: string) {
    this.val2 += val;
  }

  somar() {
    this.resul = Number(this.val1) + Number(this.val2); //soma e joga o resul
  }

  subtrair() {
    this.resul = Number(this.val1) - Number(this.val2); //soma e joga o resul
  }

  multiplicar() {
    this.resul = Number(this.val1) * Number(this.val2); //soma e joga o resul
  }

  dividir() {
    this.resul = Number(this.val1) / Number(this.val2); //soma e joga o resul
  }

}
