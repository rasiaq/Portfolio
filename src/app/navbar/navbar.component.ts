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

  itemSelected(): void {
    this.menuVisible = !this.menuVisible;
  }

}
