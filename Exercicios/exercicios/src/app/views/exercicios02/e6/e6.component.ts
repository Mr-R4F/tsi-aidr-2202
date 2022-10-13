import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-e6',
  templateUrl: './e6.component.html',
  styleUrls: ['./e6.component.css']
})
export class E6Component implements OnInit {
  txt = ''

  constructor() { }

  ngOnInit(): void {
  }

  mostrarTexto() {
    this.txt = 'Isto é uma DIV';
  }
}
