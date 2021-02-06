import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  menuVisible = false;

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  scroll(target: string): void {
    if (this.router.url.includes('#') || this.router.url == '/') {
      const element = document.querySelector('#' + target);
      console.log(element);
      if (element) element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    } else {
      this.router.navigate(['/'], { fragment: target });
    }
  }

  showSidebar(): void {
    this.menuVisible = !this.menuVisible;
  }

}
