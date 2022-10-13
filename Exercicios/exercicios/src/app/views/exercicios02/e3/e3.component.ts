import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-e3',
  templateUrl: './e3.component.html',
  styleUrls: ['./e3.component.css']
})
export class E3Component implements OnInit {
  classeCss = 'red';

  constructor() { }

  ngOnInit(): void {
  }

  mudarCor() {
    this.classeCss == 'red' ? this.classeCss = 'blue' : this.classeCss = 'red';
  }
}
