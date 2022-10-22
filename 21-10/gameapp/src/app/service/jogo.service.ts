import { Injectable } from '@angular/core';
import { Jogo } from '../model/jogo'; //IMPORTAR ESTA CLASSE EXTERNA

@Injectable({ //notação @ -> injeta uma instancia em outra classe //dá para injetar em componentes
  providedIn: 'root' //em qualquer componente desde da RAIZ.
})
export class JogoService { //Todos os serviços são classes
  //lida com a parte dos dados
  //locais por enquanto
  //prop representa os jogos
  //necessário classe de modelo

  //representa as funções de jogo (representa os dados em memória)
  private jogos = new Array<Jogo>(); //é uma classe externa (necessário IMPORTAR) (C/ o priva garante que essa propriedade só EXISTE AQUI)(Protege o array de qualquer classe que INTERFIRA AQUI)
  //Proteger o array para evitar para que ele não possa ser acessada por fora (private)(fica protegido para sempre ter dados válidos, pode algo nulo pode ser colocado aqui)
  private i = 1; //Id gerado automaticamente

  constructor() { } //A definição do serviço fica aqui

  inserir(jogo: Jogo) { //Para inserir o jogo (recebe um jogo com parametro e joga no array) (passar parâmetro e tipo) //CREATE
    jogo.id = this.i; //joga no id da array;
    this.jogos.push(jogo); //joga itens sempre no final de um array
    //gerar um id manual (contador nesse caso)
    this.i++;
  }

  listar(): Jogo[] { //READ
    return this.jogos; //apenas retorna o array //volta o array (não é necessário colocar o tipo do retorno pois o TS difere)
  }

  atualizar(jogo: Jogo) { //receber o array com o id atualizado //UPDATE
    //passar o jogo tendo todos os dados (mesmo que nao haja alteração, inclusive o ID) (procura o id mostra as infos e atualiza de acordo c/ a posição)
    //findIndex -> condição e verifica uma condição -> executa a com base na condição e retorna a posição (do primeiro elemento) na qual a condição se satisfaz
    const index = this.jogos.findIndex(j => j.id == jogo.id); //se for igual executa

    //verificar se é -1 (pois não há como alterar)
    if (index >= 0) this.jogos[index] = jogo;
  }

  remover(i: number) { //REMOVER
    //passa id do jogo que vai remover e passa um array que não tenha o jogo
    //filter -> cria uma cópia do array com uma porção dele (de acordo com as condiçoes) => (função seta) (se for true mantem, false remove o elemento do array)
    this.jogos = this.jogos.filter(jogo => jogo.id != i) //representa um item na posição (param de cd jogo passado na função) (e o id passado por parametro)
    //diferente fica, senão sai
    //joga no array o val do array.
  }

  //Após isso criar um componenete para "conversar" c/ ISSO.
  












}

//ISTO É UM SERVIÇO
//-> injeta uma instancia em outra classe (não precisa do new só usar o @Injectable) (só há uma e é o angular que cria, mas todos os componentes podem ser usados)
//Os componentes compartilha a mesma instancia que o angular criou
//todos os serviçõs são injetáveis (injeção de dependencia) (não precisa se preocupar do uso do NEW)
