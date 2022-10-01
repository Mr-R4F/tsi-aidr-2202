import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-exemplo4-ng-for',
  templateUrl: './exemplo4-ng-for.component.html',
  styleUrls: ['./exemplo4-ng-for.component.css']
})
export class Exemplo4NgForComponent implements OnInit {
  titulos = new Array('@Juju35', '@zezin99', '@cecl11');
  posts = new Array('Assisti Dehmer e estou impactada!', 'O novo COD é incrível', 'Angular é a melhor linguagem de todas');

  constructor() { }

  ngOnInit(): void {
  }
}
