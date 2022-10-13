import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-e5',
  templateUrl: './e5.component.html',
  styleUrls: ['./e5.component.css']
})
export class E5Component implements OnInit {
  nome = '';
  
  constructor() { }

  ngOnInit(): void {
  }

  mostrarNome() {
    this.nome = String(prompt('Digite seu nome :)'));
  }
}
