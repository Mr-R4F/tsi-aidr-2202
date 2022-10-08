import { Component, OnInit } from '@angular/core';
import { Jogo } from 'src/app/model/jogo';

@Component({
  selector: 'app-jogos',
  templateUrl: './jogos.component.html',
  styleUrls: ['./jogos.component.css']
})
export class JogosComponent implements OnInit {

  jogos = new Array <Jogo>();
  jogoSelecionado?: Jogo;

  constructor() {
    const JOGO = new Jogo();
    JOGO.nome = '';
    JOGO.produtora = '';
    JOGO.plataforma = '';
    JOGO.genero = '';

    this.jogos.push(JOGO);
  }

  ngOnInit(): void {
  }

  mostrarJogo(jogos: Jogo) {
    this.jogoSelecionado = jogos;
  }

  deletarJogo(i: number) {
    this.jogos.splice(i, 1); //tira itens do array
    this.fecharJogo();
  }

  adicionarJogo() {
    this.jogoSelecionado = new Jogo(); //cria novo
    this.jogos.push(this.jogoSelecionado);
  }

  fecharJogo() {
    this.jogoSelecionado = undefined; //recebe nd
  }

}
