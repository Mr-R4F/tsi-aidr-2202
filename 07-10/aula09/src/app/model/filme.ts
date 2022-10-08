//Maneiras de fazer as classe de modelo

/* 1 por nulo
export class Filme { //criar modelo e coloca 'Nome'
  //colocar atributos
  nome?: string; //opcional
  nota?: number;
}
*/

/*2 construtor
export class Filme {
  nome: string;
  nota: number;

  constructor(nome: string, nota: number) {
    this.nome = nome;
    this.nota = nota;
  }
}
*/

//3 atribuição
export class Filme {
  nome = '';
  nota = 0;
}

