import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  menuVisible = false;
  SCROLL_TIMEOUT = 100;

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  scroll(target: string): void {
    if (this.router.url.includes('#') || this.router.url == '/') {
      const element = document.querySelector('#' + target);
      if (element) element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    } else {
      this.router.navigate(['/']).then(
        () => {
          setTimeout(() => {
            const element = document.querySelector('#' + target);
            if (element) element.scrollIntoView({ behavior: 'smooth', block: 'start' });
          }, this.SCROLL_TIMEOUT)
        }
      );
    }
    if (this.menuVisible) {
      this.menuVisible = false;
    }
  }

  showSidebar(): void {
    this.menuVisible = !this.menuVisible;
  }

}
