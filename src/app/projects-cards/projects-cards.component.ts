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
      icon: '../../assets/staylean/icon.png',
      title: 'stayLEAN',
      description: 'Aplikacja mobilna do umawiania się na wydarzenia sportowe ze znajomymi!',
      link: 'projects/staylean',
      techs: 'Figma, Ionic/Flutter, ... (TBD)'
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
      techs: 'Angular, Flask'
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
