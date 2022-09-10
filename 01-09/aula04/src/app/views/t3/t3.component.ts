import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-t3',
  templateUrl: './t3.component.html',
  styleUrls: ['./t3.component.css']
})
export class T3Component implements OnInit {

  classCss = 'vermelho';

  constructor() { }

  ngOnInit(): void {
  }

  trocarClasse() {
    //this.classCss = 'azul';
    this.classCss == 'vermelho' ? this.classCss = 'azul' : this.classCss = 'vermelho';
  }
}
