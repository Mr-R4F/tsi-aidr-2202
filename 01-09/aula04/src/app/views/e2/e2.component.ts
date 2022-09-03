import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-e2',
  templateUrl: './e2.component.html',
  styleUrls: ['./e2.component.css']
})
export class E2Component implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  img = 'assets/cheia.jpg';

  mudarImagem() {
    this.img == 'assets/cheia.jpg' ? this.img = 'assets/vazia.jpg' : this.img = 'assets/cheia.jpg';
  }
}
