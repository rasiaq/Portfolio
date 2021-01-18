import { Component, OnInit, Input } from '@angular/core';
import { ProjectCard } from '../project-card';

@Component({
  selector: 'app-project-card',
  templateUrl: './project-card.component.html',
  styleUrls: ['./project-card.component.css']
})
export class ProjectCardComponent implements OnInit {

  @Input()
  card!: ProjectCard;

  constructor() { }

  ngOnInit(): void {
  }

}
