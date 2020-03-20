import { Component, OnInit, HostListener } from '@angular/core';

@Component({
  selector: 'app-live',
  templateUrl: './live.component.html',
  styleUrls: ['./live.component.sass']
})
export class LiveComponent implements OnInit {
  constructor() {}

  private twitchPlayerWidth: number;
  private twitchChatWidth: number;
  private isMobile: boolean;

  @HostListener('window:resize', ['$event'])
  onResize(event) {
    this.setWidths();
    this.isMobile = window.innerWidth > 600 ? false : true;
  }

  ngOnInit() {
    this.isMobile = window.innerWidth > 600 ? false : true;
    this.setWidths();
  }

  setWidths() {
    this.twitchPlayerWidth = !this.isMobile
      ? (window.innerWidth * 69) / 100
      : window.innerWidth;
    this.twitchChatWidth = !this.isMobile
      ? (window.innerWidth * 29) / 100
      : window.innerWidth;
  }

  getChatHeight(): number {
    return this.isMobile
      ? window.innerHeight * 0.93 - (this.twitchPlayerWidth * 9) / 16
      : (this.twitchPlayerWidth * 9) / 16;
  }

  getTwitchHeight(): number {
    return this.isMobile
      ? window.innerHeight * 0.93
      : window.innerHeight * 0.85;
  }
}
