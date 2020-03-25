import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.sass']
})
export class HomeComponent implements OnInit {
  presentationPanels = [
    {
      title: 'LIVE',
      icon: 'tv',
      description:
        'Suivez en direct l\'aventure en cours et discutez depuis le tchat avec la communauté !'
    },
    {
      title: 'JEUX',
      icon: 'games',
      description: 'Jouez et rapportez des points à votre faction !'
    },
    {
      title: 'FACTIONS',
      icon: 'outlined_flag',
      description:
        'Rejoignez une faction et défendez la cause qui vous tient le plus a coeur !'
    },
    {
      title: 'VIDEOS',
      icon: 'video_library',
      description:
        'Regardez les rediffusions ainsi que les différentes vidéos de nos candidats !'
    }
  ];
  currentPresentationPanel = -1;
  constructor() {}

  ngOnInit() {}
}
