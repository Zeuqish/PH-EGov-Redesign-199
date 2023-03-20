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
  @Input() textAlign: string = 'center';

  ngOnInit() {}

  returnButtonType() {
    return this.buttonType;
  }

  getButtonDetails() {
    return `
    text-align: ${this.textAlign};
    text-decoration: none; `;
  }
}
