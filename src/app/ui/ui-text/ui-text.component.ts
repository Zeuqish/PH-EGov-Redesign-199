import { Component, Input } from '@angular/core';
import { TextSize, FontWeight, FontColor } from '../typedefs';

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
  @Input() fontColor: FontColor = FontColor.DARK;

  getTextDetails() {
    return `font-size:${this.textSize}px;
    font-weight: ${this.fontWeight};
    color: ${this.fontColor}`;
  }
}
