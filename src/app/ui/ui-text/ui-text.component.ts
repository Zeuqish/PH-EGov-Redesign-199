import { Component, Input } from '@angular/core';
import { TextSize, FontWeight } from '../typedefs';

@Component({
  selector: 'ui-text',
  template: `
    <div class="text-component" [style]="getTextDetails()">
      <ng-content></ng-content>
    </div>
  `,
  styleUrls: ['./ui-text.component.scss'],
})
export class UITextComponent {
  @Input() textSize: number = TextSize.REGULAR;
  @Input() fontWeight: number = FontWeight.REGULAR;

  getTextDetails() {
    return `font-size:${this.textSize}px;
    font-weight: ${this.fontWeight};`;
  }
}
