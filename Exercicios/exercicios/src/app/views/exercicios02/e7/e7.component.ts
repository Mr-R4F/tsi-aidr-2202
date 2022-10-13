import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-e7',
  templateUrl: './e7.component.html',
  styleUrls: ['./e7.component.css']
})
export class E7Component implements OnInit {
  color = '';

  constructor() { }

  ngOnInit(): void {
  }

  mudarCor(color:string) {
    this.color = color;
  }

}
