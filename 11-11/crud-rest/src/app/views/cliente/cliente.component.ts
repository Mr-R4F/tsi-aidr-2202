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
  inserirClientes?: Cliente; //pode ser nulo (pois espera receber dados)

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
    this.inserirClientes = new Cliente(); //criar um cliente novo (fazendo com que a variavel tenha valor)
  }




  cancelar() { //joga undefined na variavel
    this.inserirClientes = undefined;
  }

  salvar() { //chamar o serviço e inserir
    if (!this.inserirClientes) return; //cancela o script
    this.clienteService.inserir(this.inserirClientes).subscribe(cliente => {
      this.listar();
      alert('Cliente adicionado com sucesso!');
    }); //var
  }







  //para serviço tambem faz injeção
}
