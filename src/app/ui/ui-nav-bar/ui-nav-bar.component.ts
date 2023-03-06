import { Component, Input } from '@angular/core';
import { TextSize, FontWeight } from '../typedefs';

@Component({
  selector: 'ui-nav-bar',
  template: `
    <div class="nav-bar">
      <ul>
        <li><a href="#">Home</a></li>
        <li><a href="#">About the Province</a></li>
        <li><a href="#">Programs</a></li>
        <li><a href="#">The Provincial Government</a></li>
      </ul>
    </div>

  `,
  styleUrls: ['./ui-nav-bar.component.scss'],
})
export class UINavBar {

  constructor() { }

  isShowDivIf = true;
  toggleDisplayDivIf() {
    this.isShowDivIf = !this.isShowDivIf;
  }
}

