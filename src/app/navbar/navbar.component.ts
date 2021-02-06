import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  menuVisible = false;

  constructor() { }

  ngOnInit(): void {
  }

  scroll(target: string): void {
    const element = document.querySelector(target);
    if (element) element.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }

  showSidebar(): void {
    this.menuVisible = !this.menuVisible;
  }

}
