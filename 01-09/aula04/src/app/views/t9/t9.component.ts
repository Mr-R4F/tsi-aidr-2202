import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-t9',
  templateUrl: './t9.component.html',
  styleUrls: ['./t9.component.css']
})
export class T9Component implements OnInit {

  classeCss = '';

  constructor() { }

  ngOnInit(): void {
  }

  trocarClasse() { //mais botões colocar parâmetro
    this.classeCss = 'botaoCor';
  }
}
