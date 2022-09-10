import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-t6',
  templateUrl: './t6.component.html',
  styleUrls: ['./t6.component.css']
})
export class T6Component implements OnInit {

  textoDiv = '';

  constructor() { }

  ngOnInit(): void {
  }

  trocarTexto() {
    this.textoDiv = 'Isso é uma div';
  }

}
