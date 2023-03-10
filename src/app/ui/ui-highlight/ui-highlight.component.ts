import { Component, Input } from '@angular/core';
import { TextSize, FontWeight } from '../typedefs';

@Component({
  selector: 'ui-highlight',
  template: `
    <mark [style]="getMarkStyle()">
      <ng-content></ng-content>
    </mark>
  `,
  styleUrls: ['./ui-highlight.component.scss'],
})
export class UIHighlightComponent {
  @Input() backgroundColor: String = '#f1e740';
  @Input() textColor: String = '#000000';

  getMarkStyle() {
    return ` background-color:${this.backgroundColor};
    color: ${this.textColor};`;
  }
}
