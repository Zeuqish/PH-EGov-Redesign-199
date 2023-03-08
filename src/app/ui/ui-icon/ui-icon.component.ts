import { Component, Input } from '@angular/core';
import { IconSize } from '../typedefs';

@Component({
  selector: 'ui-icon',
  template: ` <img [src]="this.iconSrc" [style]="getIconStyle()" /> `,
  styleUrls: ['./ui-icon.component.scss'],
})
export class UIIconComponent {
  @Input() iconSrc: string = '';
  @Input() iconSize: IconSize = IconSize.MID;

  getIconStyle() {
    return `width: ${this.iconSize}px; height: auto;`;
  }
}
