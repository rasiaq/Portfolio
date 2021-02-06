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
    { icon: '../../assets/astroview-img/icon.png', title: 'AstroView', description: 'Aplikacja na platformę Android do sprawdzania horoskopu, pobierająca dane po API.', link: 'astroview', techs: 'Android, Java', status: 'Ukończony' },
    { icon: '../../assets/astroview-img/icon.png', title: 'AstroView', description: 'Aplikacja na platformę Android do sprawdzania horoskopu, pobierająca dane po API.', link: 'astroview', techs: 'Android, Java', status: 'Ukończony' },
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
