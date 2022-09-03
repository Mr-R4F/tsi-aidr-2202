import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-e3',
  templateUrl: './e3.component.html',
  styleUrls: ['./e3.component.css']
})
export class E3Component implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  texto = 'clique nos botões AGORA!';
  btn = 'btn';

  mudarTexto(txt: string) {
    this.texto = txt;
  }
}
