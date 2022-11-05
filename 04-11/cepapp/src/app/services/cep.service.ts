import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Endereco } from '../model/endereco';

@Injectable({
  providedIn: 'root'
})
export class CepService {
  constructor(private http: HttpClient) { }    //deve injetar o module (todas as chamadas serão feitas por aqui)

  //criar função e dps observable
  obterEndereco(cep: string): Observable<Endereco> { //não importanto se bate na API bate aqui no Observable (a cada atualização informa o usuário, o observable possui retorno (subtipo<> (de alguma coisa  e dentro do <> é o que volta da API (tipo de dado que retorna da API))))
    //fazer chamada da API
    //criar um componenete que chama isto
    //fazer http -> via module (client moduel)
    //Para fazer a chamada
    return this.http.get<Endereco>(`http://viacep.com.br/ws/${cep}/json/`); //<--- dentro do get colocar o endereço do serviço //dizer para qual tipo vai converter
  } //pega o json e converte em um objeto de endereço ( e como retorna o obsevable , retornar para quem chamou)
  //vai no endereço obtem os dados, pega esse dados converte em json para o tipo endereço e retorna para quem chamou
}
