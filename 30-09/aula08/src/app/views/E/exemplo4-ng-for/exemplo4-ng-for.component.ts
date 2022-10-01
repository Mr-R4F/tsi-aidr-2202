import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-exemplo4-ng-for',
  templateUrl: './exemplo4-ng-for.component.html',
  styleUrls: ['./exemplo4-ng-for.component.css']
})
export class Exemplo4NgForComponent implements OnInit {
  titulos = new Array('tecnologia', 'política', 'saúde');
  posts = new Array('Um post sobre tecnologia', 'Um post sobre política', 'Um post sobre saúde');

  constructor() { }

  ngOnInit(): void {
  }
}
