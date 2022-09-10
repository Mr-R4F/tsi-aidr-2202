import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-t8',
  templateUrl: './t8.component.html',
  styleUrls: ['./t8.component.css']
})
export class T8Component implements OnInit {

  classeCss = 'mouseOFF';

  constructor() { }

  ngOnInit(): void {
  }

  trocarClasse(classeCss: string) {
    this.classeCss = classeCss;
  }

}
