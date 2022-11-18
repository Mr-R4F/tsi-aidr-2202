import { Component, OnInit } from '@angular/core';
import { Cliente } from 'src/app/model/cliente';
import { ClienteService } from 'src/app/services/cliente.service';

@Component({
  selector: 'app-cliente',
  templateUrl: './cliente.component.html',
  styleUrls: ['./cliente.component.css']
})
export class ClienteComponent implements OnInit {
  mostrarClientes: Cliente[] = [];
  cliente?: Cliente; //pode ser nulo (pois espera receber dados) //id aqui
  inserindo = false;

  constructor(private clienteService: ClienteService) { } //por nome (variável) e tipo

  ngOnInit(): void {
    this.listar(); //para iniciar toda vez que a pagina carregar
  }

  listar() {
    this.clienteService.listar().subscribe(clientes => {
      this.mostrarClientes = clientes; //mostrar os dados (clientes aqui, recebe o que vem do back, entra no array de clientes)
    }); //necessário subscribe para uso (pq, roda em paralelo e quando o resultado) (reponsivo - continuar respondendo)
  } //colocar variavel com o tipo do retorno (no subscribe) (que é chamado quando o BACK responder, e nos parametros terá a resposta do back)

  criar() { //cria um cliente novo
    this.cliente = new Cliente(); //criar um cliente novo (fazendo com que a variavel tenha valor)
    this.inserindo = false;
  }

  excluir(id?: number) { //chama aqui e perguta se o usuário confirma a escolha (passar parametro, id)
    if (!id) return;

    const RESPOSTA = confirm('Tem certeza que deseja remover o cliente selecionado ? Esta ação não pode ser desfeita.');
    RESPOSTA ? this.clienteService.remover(id).subscribe(() => {
      alert('Cliente excluido com sucesso!');
      this.listar(); //atualiza lista
    }) : null;
  } //operação destrutiva (colocar mensagens) //caso não retorne nada () vazio (quando não possuir parametro)

  //duas partes (clica no item e edita e salva) (UPDATE)
  selecionar(cliente: Cliente) { //ao clicar no item (ao clicar aqui mudar a flag para distinguir se deve chamar inserir ou atualizar) (chama um ou outro e colocar if)
    this.cliente = cliente;
    this.inserindo = true;
  }

  cancelar() { //joga undefined na variavel
    this.cliente = undefined;
  }

  salvar() { //chamar o serviço e inserir
    if (!this.cliente) return; //cancela o script

    if (!this.inserindo) {
      this.clienteService.inserir(this.cliente).subscribe(cliente => {
        this.listar();
        this.cancelar(); //para remover o form
        alert('Cliente adicionado com sucesso!');
      }); //var
    } else {
      this.clienteService.atualizar(this.cliente).subscribe(cliente => {
        this.listar();
        this.cancelar();
        alert('Cliente atualizado com sucesso!');
      })
    }

  }
  //para serviço tambem faz injeção
}
