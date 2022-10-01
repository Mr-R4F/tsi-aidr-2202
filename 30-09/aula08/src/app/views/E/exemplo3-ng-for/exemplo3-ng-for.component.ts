import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-exemplo3-ng-for',
  templateUrl: './exemplo3-ng-for.component.html',
  styleUrls: ['./exemplo3-ng-for.component.css']
})
export class Exemplo3NgForComponent implements OnInit {

  paises = new Array('Brasil', 'EUA', 'França', 'Portugal');

  constructor() { }

  ngOnInit(): void {
  }

  mostrarPais(val:string) {
    alert(val);
  }

}
