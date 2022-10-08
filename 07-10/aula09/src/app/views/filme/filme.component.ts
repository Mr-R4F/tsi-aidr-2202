import { Component, OnInit } from '@angular/core';
import { Filme } from 'src/app/model/filme';

@Component({
  selector: 'app-filme',
  templateUrl: './filme.component.html',
  styleUrls: ['./filme.component.css']
})
export class FilmeComponent implements OnInit {

  //array para guardar os dados;

  filmes = new Array <Filme>(); //tipo de um tipo um -> array de um tipo //(mostra dados)
  filmeSelecionado?: Filme; //edita filmes ? -pode ser indefinida

  constructor() { //nas funções é necessário const / let (cada construtor pertence a um objeto) //armazenar
    const FILME_HOBBIT = new Filme(); //nova instancia
    FILME_HOBBIT.nome = 'O Hobbit'; //valores
    FILME_HOBBIT.nota = 7; // *

    const FILME_HP = new Filme();
    FILME_HP.nome = 'Harry Potter e a Pedra Filosofal';
    FILME_HP.nota = 10;

    this.filmes.push(FILME_HOBBIT, FILME_HP); //jogando no array
  }

  ngOnInit(): void {
  }

  selecionarFilme(filme: Filme) { //pega o filme selecionado por parâmetro e joga na var
    this.filmeSelecionado = filme;
  }

  fecharFilme() { //editar
    this.filmeSelecionado = undefined; //recebe nd
  }

  novoFilme() {
    this.filmeSelecionado = new Filme(); //cria novo
    this.filmes.push(this.filmeSelecionado);
  }

  removerFilme(i: number) { //espera receber um indice para remover o índice
    this.filmes.splice(i, 1); //tira itens do array
    this.fecharFilme();
  }

}
