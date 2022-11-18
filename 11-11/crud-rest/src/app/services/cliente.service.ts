import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { EMPTY, Observable } from 'rxjs';
import { Cliente } from '../model/cliente';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {
  constructor(private http: HttpClient) { //colocar o http para usar
    //para fazer a chamada da api necessário injetar
  }

  //OPERAÇÕES
  listar(): Observable<Cliente[]> { //converte em array js de cliente (o json que vem é convertido) (rodar em paralelo)
    return this.http.get<Cliente[]>("http://localhost:3000/cliente"); //chama e passa métodos (passar o endereço que vai bater, diamond <> -> para tipo generico)
  } //retornar para quem chamou (volta o array)

  inserir(cliente: Cliente): Observable<Cliente> { //receber os dados (vir por parametro) (por o tipo da model) (pq é via POST) (cliente volta cliente)
    return this.http.post<Cliente>("http://localhost:3000/cliente", cliente); //volta objeto (o item inserido)( passar url e corpo( o que vem de parametro (pega transforma e json e manda para o usuário)))
  } //o retorno é o tipo observable (volta apenar uma)

  remover(id: number): Observable<any> { //receber os dados (vir por parametro) (passa um ID) (pq é via DEL) (deve voltar observable e possui tipagem, colocar any nesse caso) (caso o back não volte dados)
    return this.http.delete<Cliente>(`http://localhost:3000/cliente/${id}`); //não possui nada para mudar, passar o id
  } //o retorno é o tipo observable (não volta nada) - passa o id que quer remover
  //necessário subtipo ( é o que volta)

  atualizar(cliente: Cliente): Observable<Cliente> { //receber os dados e id (vir por parametro) (pq é via PUT) (recebe o cliente modificado via ID)
    if (!cliente.id) return EMPTY; //para cancelar dentro do observable (usar EMPTY (retona observable vazio)) retorno volta vazio
    return this.http.put<Cliente>(`http://localhost:3000/cliente/${cliente.id}`, cliente); //recebe os argumentos do body (json) (passa o id do cliente e cliente atualizado) (id e corpo respectivamente)
  } //o retorno é o tipo observable (volta o id do cliente modificado) - passa o id que quer modificar
  //necessário subtipo (é o que volta)
}
