import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-exemplo1-ng-for',
  templateUrl: './exemplo1-ng-for.component.html',
  styleUrls: ['./exemplo1-ng-for.component.css']
})
export class Exemplo1NgForComponent implements OnInit {
  //var de array
  animais = new Array('gato', 'cachorro', 'calopsita', 'onça', 'papagaio'); //gera uma cópia disso mostra no HTML

  //
  filmes = new Array('Titanic', 'A Orfã', 'Senhor dos Anéis');
  notas = new Array(9, 8, 10);

  constructor() { }

  ngOnInit(): void {
  }

}
