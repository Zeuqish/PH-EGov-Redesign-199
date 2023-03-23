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
        <ui-text>
          <div class="menu">
            <li><ui-link [url]="'/home'">Home</ui-link></li>
            <li>
              <ui-link [url]="'/home'" [url_fragment]="'services'">
                Services
              </ui-link>
            </li>
            <li><ui-link [url]="'/about'">About the Province</ui-link></li>
          </div>
        </ui-text>
      </ul>
    </div>
  `,
  styleUrls: ['./ui-nav-bar.component.scss'],
})
export class UINavBarComponent {
  constructor() {}
  navbarOpen = false;

  ngOnInit(): void {
    this.navbarOpen = false;
  }

  toggleNavbar() {
    this.navbarOpen = !this.navbarOpen;
  }
}
