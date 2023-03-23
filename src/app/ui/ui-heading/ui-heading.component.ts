import { Component, Input } from '@angular/core';
import { HeadingSize, FontWeight, FontColor } from '../typedefs';

@Component({
  selector: 'ui-heading',
  template: `
    <div class="heading-component" [style]="getTextDetails()">
      <ng-content></ng-content>
    </div>
  `,
  styleUrls: ['./ui-heading.component.scss'],
})
export class UIHeadingComponent {
  @Input() headingSize: number = HeadingSize.HEADING_ONE;
  @Input() fontWeight: number = FontWeight.BOLD;

  getTextDetails() {
    return `font-size:${this.headingSize}px;
    font-weight: ${this.fontWeight};`;
  }
}
