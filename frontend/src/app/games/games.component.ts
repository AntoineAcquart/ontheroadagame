import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-games',
  templateUrl: './games.component.html',
  styleUrls: ['./games.component.sass']
})
export class GamesComponent implements OnInit {
  constructor() {}

  private currentVideoIndex: number;
  private videos: string[] = [
    'assets/videos/fall.mov',
    'assets/videos/jump.mov'
  ];

  ngOnInit() {
    this.currentVideoIndex = 0;
  }

  changeVideo() {
    this.currentVideoIndex = this.videos[this.currentVideoIndex + 1]
      ? this.currentVideoIndex + 1
      : 0;
  }
}
