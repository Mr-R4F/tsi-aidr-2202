import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-e1',
  templateUrl: './e1.component.html',
  styleUrls: ['./e1.component.css']
})
export class E1Component implements OnInit {
  musica = 'One Kiss';
  album = 'One Kiss';
  interprete = 'Calvin Harris, Dua Lipa';

  constructor() { }

  ngOnInit(): void {
  }

}
