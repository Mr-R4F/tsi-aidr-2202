import { Component, OnInit } from '@angular/core';
import { Endereco } from 'src/app/model/endereco';
import { CepService } from 'src/app/services/cep.service';

@Component({
  selector: 'app-cep',
  templateUrl: './cep.component.html',
  styleUrls: ['./cep.component.css']
})
export class CepComponent implements OnInit {
  cep = '';
  endereco?: Endereco; //joga aqui par aparecer

  constructor(private cepService: CepService) { } //ir aqui para injetar (private e nome do serviço para injetar( e tipo)) (injeta a instancia do serviço aqui) (ao colocar aqui ele cria ma propriedade)

  ngOnInit(): void {}

  //criar VV (deve ser injetável) //esepera concluir para então fazer algo com os dados
  consultarCep() {
    this.cepService.obterEndereco(this.cep).subscribe(endereco => {  //o que conseguir do serve (ISTO É EXECUTADO EM PARALELO e fica esperando a resposta (fora do subscribe))
      this.endereco = endereco//vem do TIPO
      //roda quando obter a resposta
    }) /*inscrever-se no observable ( isto é quando tiver função faz algo e dentro colocar a
      função que vai chamar quando a resposta chegar (arrow function))
      passa parametro e arrow + chaves */
  }
}
