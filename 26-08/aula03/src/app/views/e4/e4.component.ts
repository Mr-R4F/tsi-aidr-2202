import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-e4',
  templateUrl: './e4.component.html',
  styleUrls: ['./e4.component.css']
})
export class E4Component implements OnInit {
  constructor() { }

  img1 = 'assets/img1.jpg';
  img2 = 'assets/img2.jpg';
  img3 = 'assets/img3.jpg';

  imgCss = 'img';
  imgCss2 = 'img2';
  imgCss3 = 'img3';

  ngOnInit(): void {
  }

}
