import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-e4',
  templateUrl: './e4.component.html',
  styleUrls: ['./e4.component.css']
})
export class E4Component implements OnInit {
  raca = '';

  constructor() { }

  ngOnInit(): void {
  }

  mostrarRaca(raca:string) {
    this.raca = raca;
  }
}
