import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-e13',
  templateUrl: './e13.component.html',
  styleUrls: ['./e13.component.css']
})
export class E13Component implements OnInit {
  val = '';
  logotipo = '';

  constructor() { }

  ngOnInit(): void {
  }

  exibir() {
    switch (this.val) {
      case 'Mercedes':
        this.logotipo = 'assets/mercedes.jpg';
        break;

      case 'Scania':
        this.logotipo = 'assets/scania.png';
        break;

      case 'Volvo':
        this.logotipo = 'assets/volvo.jpg';
        break;

      default:
        break;
    }
    return this.logotipo;
  }
}
