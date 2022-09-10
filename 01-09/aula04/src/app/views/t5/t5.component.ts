import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-t5',
  templateUrl: './t5.component.html',
  styleUrls: ['./t5.component.css']
})
export class T5Component implements OnInit {

  nome = '';
  //nome: string ? (pode ser nulo) = '';
  constructor() { }

  ngOnInit(): void {
  }

  lerNome() {
    this.nome = prompt('Digite seu nome') as string; // o prompt pode voltar nulo pois a pessoa pode não digitar nada
    //this.nome = prompt('Digite seu nome') + '';
    //this.nome = prompt('Digite seu nome') + '';
  }
}
