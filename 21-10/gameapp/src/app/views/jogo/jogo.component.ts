import { Component, OnInit } from '@angular/core';
import { Jogo } from 'src/app/model/jogo'; //importa do modelo jogo
import { JogoService } from 'src/app/service/jogo.service'; //necessário injeção

@Component({
  selector: 'app-jogo',
  templateUrl: './jogo.component.html',
  styleUrls: ['./jogo.component.css']
})
export class JogoComponent implements OnInit {
  jogos = new Array<Jogo>; //array p/ exibição dos dados
  jogoSelecionado?: Jogo; //é opcional

  //JogoService: JogoService <-- é como se fosse isso e param no construtor
  //Montar função de listagem
  //inserir manual
  constructor(private jogoService: JogoService) { //guarda os dados
    const jogo = new Jogo();
    jogo.nome = 'The Last of Us';
    jogo.plataforma = 'PS4';
    jogo.genero = 'Survival Horror';
    jogo.status = '';
    jogoService.inserir(jogo); //passar o jogo que quer inserir.

    const jogo2 = new Jogo();
    jogo2.nome = 'Valorant';
    jogo2.plataforma = 'PC';
    jogo2.genero = 'FPS';
    jogo2.status = '';
    jogoService.inserir(jogo2);
  } //IR AQUI (parâmetros, tipo do serviço e private) (e p/ cd coisa que o angular vai injectar, criar um param privado)(colocar algo que quer que injete) (deve estar marcada com a visibilidade)
  //necessário @injectable

  ngOnInit(): void { //executado sempre que a pág carrega
    this.atualizarLista(); //carrega a lista de jogos toda vez que a pág. carrega.
  }

  atualizarLista() { //pega o que está no serviço e joga nessa var
    this.jogos = this.jogoService.listar(); //pega os dados do serviço e joga aqui. (min - instancia da classe)
  }

  selecionarJogo(jogo: Jogo) { //é chamado toda vez que clica na lista (de cada interação)
    this.jogoSelecionado = jogo; //joga o jogo como parâmetro
  }
}
