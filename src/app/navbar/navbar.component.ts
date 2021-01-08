import { Component, OnInit, Renderer2, ElementRef } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  menuVisible: boolean = false;

  constructor(private renderer: Renderer2, private elementRef: ElementRef) { }

  ngOnInit(): void {
  }

  showMenu(): void {
    this.menuVisible = !this.menuVisible;
  }

  itemSelected(event: any): void {
    const navLinkElements = this.elementRef.nativeElement.querySelectorAll('.nav-link');
    navLinkElements.forEach((e: any) => this.renderer.removeClass(e, 'active'));

    this.renderer.addClass(event.target, 'active');

    this.showMenu();
  }

}
