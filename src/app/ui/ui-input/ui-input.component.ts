import { Component, Input } from '@angular/core';
import { InputBoxWidth, InputTypes} from '../typedefs';

@Component({
  selector: 'ui-input',
  template: `
    <input [type]='returnInputType()' [style]='getInputDetails()'>
  `,
  styleUrls: ['./ui-input.component.scss'],
})
export class UIInputComponent {
  @Input() boxWidth: number = InputBoxWidth.FULL;
  @Input() inputType: InputTypes = InputTypes.TEXT;

  ngOnInit() {}

  returnInputType(){
    return this.inputType
  }
  getInputDetails() {
    return `
  width: ${this.boxWidth}%;
  `;
  }
}
