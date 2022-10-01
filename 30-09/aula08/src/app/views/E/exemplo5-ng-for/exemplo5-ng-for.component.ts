import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-exemplo5-ng-for',
  templateUrl: './exemplo5-ng-for.component.html',
  styleUrls: ['./exemplo5-ng-for.component.css']
})
export class Exemplo5NgForComponent implements OnInit {
  i = 0;
  nomes : string[] = [];
  val = '';

  constructor() { }

  ngOnInit(): void {
  }

  add(val:string) {
    this.nomes[this.i] = val;
    this.i++;
    console.log(this.nomes)
  }
}
