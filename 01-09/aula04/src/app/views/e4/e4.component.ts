import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-e4',
  templateUrl: './e4.component.html',
  styleUrls: ['./e4.component.css']
})
export class E4Component implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  tabOne = 'show';
  tabTwo = 'hide';
  tabThree = 'hide';

  mudarAba(val: string) {
    switch (val) {
      case 'aba2':
        this.tabTwo = 'show';
        this.tabOne = this.tabThree = 'hide';
        break;

      case 'aba3':
        this.tabThree = 'show';
        this.tabTwo = this.tabOne = 'hide';
        break;

      default:
        this.tabOne = 'show';
        this.tabTwo = this.tabThree = 'hide';
        break;
    }
  }
}
