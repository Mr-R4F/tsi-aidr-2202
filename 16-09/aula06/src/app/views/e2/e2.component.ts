import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-e2',
  templateUrl: './e2.component.html',
  styleUrls: ['./e2.component.css']
})
export class E2Component implements OnInit {

  img = '';

  constructor() { }

  ngOnInit(): void {
  }

  mostrarRaca () { //usar interpolação com o bind img ou outros funciona
    this.img == 'bulldog' ? 'assets/bulldog.jpg' : (this.img == 'pitbull' ? 'assets/bulldog.jpg' : 'assets/rotweiller.jpg');
  }
}
