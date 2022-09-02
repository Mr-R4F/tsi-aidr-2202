import { Component, OnInit } from '@angular/core';

@Component({ //selector , tag que aciona o componente
  selector: 'app-ex-interp',
  templateUrl: './ex-interp.component.html',
  styleUrls: ['./ex-interp.component.css']
})
export class ExInterpComponent implements OnInit {

  //para criar uma propriedade, colocar como global (dentro da classe)
  //propriedade: string = 'Teste'; //inferência ('adivinha' o tipo)
  propriedade = 'Teste'; //propriedade /atributos (váriaveis), métodos (funções que fica dentro da classe)
  valor1 = 10;
  valor2 = 'myClass'; //txt

  //atributos, construtor (limite) e funções (seguir a ordem)
  constructor() { } //excuta uma vez

  ngOnInit(): void { //executa cada vez que executa a classe
  }

  //no TS não precisa colocar a keyword 'function', colocar apenas o 'corpo' da função (Se tive dentro da classe).
  obterNome() {
    return 'Rafael'; //interpolação
  }

  somar(valor1:number, valor2:number) { //nas funções ao colcoar parametros é obrigatório colocar os tipos
    return valor1 + valor2;
  }
}
