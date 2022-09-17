import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-b-duas-vias',
  templateUrl: './b-duas-vias.component.html',
  styleUrls: ['./b-duas-vias.component.css']
})
export class BDuasViasComponent implements OnInit {

  //propriedade fica acima do ng e construtor
  //bind duas vias sinonimo de componente de entrar (input, selects, textbox) só interage bind de uma via, para tratar o valor é sempre bind de duas vias
  nome = ''; //linkada na pág 1
  sobrenome = ''; // 3

  val1 = 0; // 2
  val2 = 0; //2

  color = ''; //

  generoFilme = '';
  img = '';

  //6
  contatoTelefone = false;
  contatoEmail = false;

  //7

  classeHeroi = '';


  constructor() { }

  ngOnInit(): void {
  }

  //funções ficam abaixo do construtor e ng
  limparNome() {
    this.nome = '';
  }

  obterNomeCompleto() {
    return  (this.nome + this.sobrenome).toUpperCase();
  }

  //fazer funções levas

}
