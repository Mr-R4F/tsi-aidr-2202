import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-t1',
  templateUrl: './t1.component.html',
  styleUrls: ['./t1.component.css']
})
export class T1Component implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  musicName = 'Piece Of Your Heart (Alok Remix)';
  musicAlbum = 'Piece Of Your Heart';
  musicArtist = 'MEDUZA, Alok, Goodboys';
  music = 'music';
}
