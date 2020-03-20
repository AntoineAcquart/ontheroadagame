import { Component, OnInit, HostListener } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent implements OnInit {
  title = 'On The Road A Game';
  public isMobile: boolean;

  ngOnInit() {
    this.isMobile = window.innerWidth > 600 ? false : true;
  }

  @HostListener('window:resize', ['$event'])
  onResize(event) {
    this.isMobile = window.innerWidth > 600 ? false : true;
  }
}
