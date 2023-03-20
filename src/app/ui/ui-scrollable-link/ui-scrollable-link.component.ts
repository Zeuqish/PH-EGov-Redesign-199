import { Component, Input } from '@angular/core';
import { TextSize, FontWeight } from '../typedefs';

@Component({
  selector: 'ui-scrollable-link',
  template: `
    <a (click)="scrollTo(this.target)" [style]="getLinkStyle()">
      <ng-content></ng-content>
    </a>
  `,
  styleUrls: ['./ui-scrollable-link.component.scss'],
})
export class UIScrollableLinkComponent {
  @Input() textSize: number = TextSize.REGULAR;
  @Input() fontWeight: number = FontWeight.REGULAR;

  @Input() target: string = '';

  scrollTo(target: string) {
    let element = document.getElementById(target);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }

  // TODO: add link designs
  getLinkStyle() {
    return `font-size:${this.textSize}px;
    font-weight: ${this.fontWeight};`;
  }
}
