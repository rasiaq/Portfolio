import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private location: Location) {
    this.location.replaceState('');
   }

  ngOnInit(): void {
  }

  scroll(target:string) {
    const element = document.querySelector('#' + target);
    if (element) element.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }
}
