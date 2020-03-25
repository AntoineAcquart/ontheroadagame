import { Component, OnInit, HostListener } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-videos',
  templateUrl: './videos.component.html',
  styleUrls: ['./videos.component.sass']
})
export class VideosComponent implements OnInit {
  videos = [
    {
      title: 'Présentation de On The Road A Game',
      src: 'https://www.youtube.com/embed/EvxFepfovjk'
    },
    {
      title: 'On The Road a Game - Jouez à voyager !',
      src: 'https://www.youtube.com/watch?v=H8i6rWGi2a4'
    },
    {
      title:
        'L\'Interview Voya-Joueur de Gabriel (Pékin Express 2018) | On The Road a Game',
      src: 'https://www.youtube.com/watch?v=8rfC_9VXiCw'
    },
    {
      title: 'L\'interview Voya-Joueur de Florian Pékin Express 2018',
      src: 'https://www.youtube.com/watch?v=51w5eH9slz4'
    }
  ];
  videoHeight = 0;
  constructor(public sanitizer: DomSanitizer) {}

  @HostListener('window:resize', ['$event'])
  onResize(event) {
    this.videoHeight = (window.innerWidth * 0.7 * 9) / 16;
  }

  ngOnInit() {
    this.videoHeight = (window.innerWidth * 0.7 * 9) / 16;
  }

  getURL(video) {
    return this.sanitizer.bypassSecurityTrustResourceUrl(video.src);
  }
}
