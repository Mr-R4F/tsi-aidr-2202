import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-exemplo5-ng-for',
  templateUrl: './exemplo5-ng-for.component.html',
  styleUrls: ['./exemplo5-ng-for.component.css']
})
export class Exemplo5NgForComponent implements OnInit {
  // i = 0;
  
  nomes : string[] = new Array(); //por padrão vem any / never, é necessário dizer o tipo
  val = ''; //var a ser ligada na caixa para ter o valor digitado

  constructor() { }

  ngOnInit(): void {
  }

  //dentro da classe não é necessário o function
  add() {
    this.nomes.push(this.val);
    /*
      this.nomes[this.i] = this.val;
      this.val = '';
      this.i++;
    */
  }

  // VVVV
  remover() {
    this.nomes = new Array();
    this.val = '';
    //this.i = 0;
  }
}
