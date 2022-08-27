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

  mostrarParaMaiusculo(txt:string) { //ao nomear métodos sempre nomear algo que ele faz (verbos)
    return txt.toUpperCase();
  }
}
