import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Cliente } from '../model/cliente';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {

  constructor(private http: HttpClient) { //colocar o http para usar
    //para fazer a chamada da api necessário injetar
  }

  listar(): Observable<Cliente[]> { //converte em array js de cliente (o json que vem é convertido) (rodar em paralelo)
    return this.http.get<Cliente[]>("http://localhost:3000/cliente"); //chama e passa métodos (passar o endereço que vai bater, diamond <> -> para tipo generico)
  } //retornar para quem chamou (volta o array)

  inserir(cliente: Cliente): Observable<Cliente> { //receber os dados (vir por parametro) (por o tipo da model) (pq é via POST)
    return this.http.post<Cliente>("http://localhost:3000/cliente", cliente); //volta objeto (o item inserido)( passar url e corpo( o que vem de parametro (pega transforma e json e manda para o usuário)))
  } //o retorno é o tipo observable (volta apenar uma)


  //necessário subtipo ( é o que volta)
}
