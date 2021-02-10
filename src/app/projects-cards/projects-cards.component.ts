import { Component, OnInit } from '@angular/core';
import { ProjectCard } from '../project-card';

@Component({
  selector: 'app-projects-cards',
  templateUrl: './projects-cards.component.html',
  styleUrls: ['./projects-cards.component.css']
})
export class ProjectsCardsComponent implements OnInit {

  cards: ProjectCard[] = [
    { icon: '../../assets/astroview-img/icon.png', title: 'AstroView', description: 'Aplikacja na platformę Android do sprawdzania horoskopu, pobierająca dane po API.', link: 'projects/astroview', techs: 'Android, Java', status: 'Ukończony' },
    { icon: '../../assets/astroview-img/icon.png', title: 'Portfolio', description: 'Strona napisana w Angularze, która obecnie jest moim portfolio.', link: 'projects/portfolio', techs: 'Angular, HTML, CSS', status: 'Ukończony' },
    { icon: '../../assets/astroview-img/icon.png', title: 'Szlakownik', description: 'Zespołowy projekt aplikacji webowej dla miłośników turystyki górskiej!', link: 'projects/szlakownik', techs: 'Angular, Python, Flask', status: 'Ukończony' },
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
