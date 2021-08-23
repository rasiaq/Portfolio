import { Component, OnInit } from '@angular/core';
import { ProjectCard } from '../project-card';

@Component({
  selector: 'app-projects-cards',
  templateUrl: './projects-cards.component.html',
  styleUrls: ['./projects-cards.component.css']
})
export class ProjectsCardsComponent implements OnInit {

  cards: ProjectCard[] = [
    {
      icon: '../../assets/astroview-img/icon.png', title: 'AstroView',
      description: 'Aplikacja na platformę Android do sprawdzania horoskopu, pobierająca dane po API.',
      link: 'projects/astroview',
      techs: 'Android, Java'
    },
    {
      icon: '../../assets/portfolio/icon.png',
      title: 'Portfolio',
      description: 'Responsywna strona internetowa, napisana w Angularze, która obecnie jest moim portfolio.',
      link: 'projects/portfolio',
      techs: 'Angular'
    },
    {
      icon: '../../assets/szlakownik/icon.png',
      title: 'Szlakownik',
      description: 'Zespołowy projekt aplikacji webowej dla miłośników turystyki górskiej!',
      link: 'projects/szlakownik',
      techs: 'Angular, Python, Flask'
    },
    {
      icon: '../../assets/law-firm-web/icon.png',
      title: 'Strona kancelarii',
      description: 'Zespołowy projekt strony internetowej w Angularze dla kancelarii prawnej.',
      link: 'projects/law-firm-website',
      techs: 'Angular, PrimeNG'
    },
    {
      icon: '../../assets/plantrunner/icon.png',
      title: 'Plant Runner',
      description: 'Hybrydowa aplikacja mobilna, zachęcająca użytkowników do przemieszczania się pieszo.',
      link: 'projects/plant-runner',
      techs: 'Ionic, Angular'
    },
    {
      icon: '../../assets/netalyze/icon.png',
      title: 'Strona Netalyze',
      description: 'Strona wydziałowego koła naukowego Netalyze na Politechnice Wrocławskiej.',
      link: 'projects/netalyze-website',
      techs: 'Angular'
    },
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
