import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-e9',
  templateUrl: './e9.component.html',
  styleUrls: ['./e9.component.css']
})
export class E9Component implements OnInit {
  text = 'black'

  constructor() { }

  ngOnInit(): void {
  }

  mudarCorTexto() {
    this.text == 'black' ? this.text = 'yellow' : this.text = 'black';
  }

}
