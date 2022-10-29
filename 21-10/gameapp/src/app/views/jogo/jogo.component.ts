import { Component, OnInit } from '@angular/core';
import { Jogo } from 'src/app/model/jogo'; //importa do modelo jogo
import { JogoService } from 'src/app/service/jogo.service'; //necessário injeção

@Component({
  selector: 'app-jogo',
  templateUrl: './jogo.component.html',
  styleUrls: ['./jogo.component.css']
})
export class JogoComponent implements OnInit {
  jogos = new Array<Jogo>; //array p/ exibição dos dados (para remover aqui)
  jogoSelecionado?: Jogo; //é opcional
  estaEditando = false;

  //JogoService: JogoService <-- é como se fosse isso e param no construtor
  //Montar função de listagem
  //inserir manual
  constructor(private jogoService: JogoService) { //guarda os dados
  } //IR AQUI (parâmetros, tipo do serviço e private) (e p/ cd coisa que o angular vai injectar, criar um param privado)(colocar algo que quer que injete) (deve estar marcada com a visibilidade)
  //necessário @injectable

  ngOnInit(): void { //executado sempre que a pág carrega
    this.atualizarLista(); //carrega a lista de jogos toda vez que a pág. carrega.
  }

  atualizarLista() { //pega o que está no serviço e joga nessa var
    this.jogos = this.jogoService.listar(); //pega os dados do serviço e joga aqui. (min - instancia da classe) (está apontando para o mesmo lugar)
  }

  selecionarJogo(jogo: Jogo) { //é chamado toda vez que clica na lista (de cada interação)
    this.jogoSelecionado = jogo; //joga o jogo como parâmetro //DO ARRAY VE PARA CÁ (aqui nesse caso aponta para o mesmo lugar)
    this.estaEditando = true;
  }
  /* 28 */
  salvar() {
    //chama o inserir e novo a depender
    this.estaEditando ? this.jogoService.atualizar(this.jogoSelecionado) : this.jogoService.inserir(this.jogoSelecionado); //chama o serviço para salvar a alteração.
    this.cancelar(); //ao salvar provalvel cancelar
  }

  cancelar() {
    this.jogoSelecionado = undefined; //joga nada / para não ter mais valor e sumir o formulário //para salvar pegar esse aqui
    this.atualizarLista(); //reseta o array (mesmo se fez alguma alteração);
  }/* 28 */

  //criar uma novo

  novo() {
    this.jogoSelecionado = new Jogo(); //
    this.estaEditando = false;
  }

  excluir(id?: number) { //id do jogo para remover
    if (!id) return;

    //chamar o serviço e pedir para remover
    this.jogoService.remover(id);
    //atualizar o lista quando remover (manda para o array)
    this.atualizarLista();
  }

  //shallow copy - mesma variavel e as duas apontam para o mesmo lugar na memoria
  //deep copy -> pega a memoria cria uma nova copia e joga em uma variável (assim uma não modifica a outra)
  //flag -> faz a mudança de estados (faz o controle)
  //toda vez que a flag atualiza o conteudo muda a depender
  //para exclusão ao criar um item excluir do serviço
  //toda vez que atualizar a lista chama
}

//local, session
//o angular possui acesso
//anteriormente era em cookie
//array -> objeto -> objeto
//serialização -> transforma obje em texto o inverso texto para objeto
//componente e serviço possuem separação
//mexer apenas no serviço //istóo é feito para ter separação
