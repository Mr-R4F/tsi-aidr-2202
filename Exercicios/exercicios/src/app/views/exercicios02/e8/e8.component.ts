import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-e8',
  templateUrl: './e8.component.html',
  styleUrls: ['./e8.component.css']
})
export class E8Component implements OnInit {
  changeColor = 'color1';

  constructor() { }

  ngOnInit(): void {
  }

  mudarCor() {
    this.changeColor == 'color1' ? this.changeColor = 'color2' : this.changeColor = 'color1';
  }

}
