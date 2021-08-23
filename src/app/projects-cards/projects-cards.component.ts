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
      icon: '../../assets/workrate/icon.png', title: 'Workrate',
      description: 'Aplikacja webowa wykorzystująca FullCalendar, do organizacji swojego czasu',
      link: 'projects/workrate',
      techs: 'Angular, Keycloak, Docker, Spring'
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
      techs: 'Ionic'
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
