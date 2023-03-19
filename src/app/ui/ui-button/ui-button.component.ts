import { Component, Input } from '@angular/core';
import { ButtonTypes, TextSize } from '../typedefs';

@Component({
  selector: 'ui-button',
  template: `
    <button [type]="returnButtonType()" [style]="getButtonDetails()">
      <ng-content></ng-content>
    </button>
  `,
  styleUrls: ['./ui-button.component.scss'],
})
export class UIButtonComponent {
  @Input() buttonType: ButtonTypes = ButtonTypes.BUTTON;
  @Input() textSize: TextSize = TextSize.REGULAR;
  @Input() buttonColor: string = 'light gray';
  @Input() textColor: string = 'black';
  @Input() textAlign: string = 'center';

  ngOnInit() {}

  returnButtonType() {
    return this.buttonType;
  }

  getButtonDetails() {
    return `background-color: ${this.buttonColor};
    color: ${this.textColor};
    text-align: ${this.textAlign};
    text-decoration: none;
    font-size: ${this.textSize}px; `;
  }
}
