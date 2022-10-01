import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-exemplo2-ng-for',
  templateUrl: './exemplo2-ng-for.component.html',
  styleUrls: ['./exemplo2-ng-for.component.css']
})
export class Exemplo2NgForComponent implements OnInit {
  imgs = new Array('assets/bulldog.jpg', 'assets/pitbull.jpg', 'assets/rotweiller.jpg');

  constructor() { }

  ngOnInit(): void {
  }

}
