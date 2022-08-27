import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-e3',
  templateUrl: './e3.component.html',
  styleUrls: ['./e3.component.css']
})
export class E3Component implements OnInit {

  nome = 'pais';

  constructor() { }

  ngOnInit(): void {
  }

  ConverterParaMinusculo(txt:string) {
    return txt.toLowerCase();
  }

}
