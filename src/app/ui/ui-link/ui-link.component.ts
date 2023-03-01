import { Component, Input } from '@angular/core';
import { TextSize, FontWeight } from '../typedefs';

@Component({
  selector: 'ui-link',
  template: `
    <a href="{{ this.url }}" [style]="getLinkStyle()">
      <ng-content></ng-content>
    </a>
  `,
  styleUrls: ['./ui-link.component.scss'],
})
export class UILinkComponent {
  @Input() textSize: number = TextSize.REGULAR;
  @Input() fontWeight: number = FontWeight.REGULAR;

  @Input() url: string = '';

  // TODO: add link designs
  getLinkStyle() {
    return `font-size:${this.textSize}px;
    font-weight: ${this.fontWeight};`;
  }
}
