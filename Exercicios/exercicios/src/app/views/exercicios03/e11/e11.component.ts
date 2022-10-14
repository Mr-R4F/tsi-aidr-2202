import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-e11',
  templateUrl: './e11.component.html',
  styleUrls: ['./e11.component.css']
})
export class E11Component implements OnInit {
  valor = '';

  constructor() { }

  ngOnInit(): void {
  }

  mostrar() {
    alert(this.valor);
  }
}
