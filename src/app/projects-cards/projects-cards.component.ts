import { Component, OnInit } from '@angular/core';
import { ProjectCard } from '../project-card';

@Component({
  selector: 'app-projects-cards',
  templateUrl: './projects-cards.component.html',
  styleUrls: ['./projects-cards.component.css']
})
export class ProjectsCardsComponent implements OnInit {

  cards: ProjectCard[] = [
    { icon: '../../assets/astroview-img/icon.png', title: 'AstroView', description: 'Aplikacja na platformę Android do sprawdzania horoskopu, pobierająca dane po API.'},
    { icon: '../../assets/astroview-img/icon.png', title: 'AstroView', description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ut mollitia incidunt placeat quod soluta debitis nulla at animi maxime laudantium. Deleniti aliquam quae et fuga tenetur quam in ipsa modi?'},
    { icon: '../../assets/astroview-img/icon.png', title: 'AstroView', description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ut mollitia incidunt placeat quod soluta debitis nulla at animi maxime laudantium. Deleniti aliquam quae et fuga tenetur quam in ipsa modi?'}
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
