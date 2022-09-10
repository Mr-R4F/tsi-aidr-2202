import { Component, OnInit, QueryList } from '@angular/core';

@Component({
  selector: 'app-t4',
  templateUrl: './t4.component.html',
  styleUrls: ['./t4.component.css']
})
export class T4Component implements OnInit {

  img = '';

  constructor() { }

  ngOnInit(): void {
  }

  trocarCao(nome: string) {
    this.img = nome;

    /* ou
    switch (nome) {
      case 'raca1':
        this.img = 'assets/raca1.jpg';
        break;

      case 'raca2':
        this.img = 'assets/raca2.jpg';
        break;

      case 'raca3':
        this.img = 'assets/raca3.jpg';
        break;

      default:
        break;
    }
    */
  }
}
