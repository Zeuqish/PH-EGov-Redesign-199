import { Component, Input } from '@angular/core';
import { TextSize, FontWeight } from '../typedefs';

@Component({
  selector: 'ui-nav-bar',
  template: `
    <div class="nav-bar">
        <ul class="show">
          <input type="checkbox" id="checkbox_toggle" />
          <div class="toggle">
            <label for="checkbox_toggle" class="hamburger">&#9776;</label>
          </div>
          <div class="menu">
            <li><a href="#">Home</a></li>
            <li><a href="#">About the Province</a></li>
            <li><a href="#">Programs</a></li>
            <li><a href="#">The Provincial Government</a></li>
          </div>
        </ul>
    </div>

  `,
  styleUrls: ['./ui-nav-bar.component.scss'],
})
export class UINavBarComponent {

  constructor() { }
  navbarOpen = false;

  ngOnInit(): void {
    this.navbarOpen = false;
  }

  toggleNavbar() {
    this.navbarOpen = !this.navbarOpen;
  }
}

