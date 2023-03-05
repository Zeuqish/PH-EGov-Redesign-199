import { Component, Input } from '@angular/core';
import { lineThickness } from 'src/app/ui/typedefs';
@Component({
  selector: 'ui-hr',
  template: `<hr [style]="getLineStyle()" />`,
  styleUrls: ['./ui-hr.component.scss'],
})
export class UIHrComponent {
  @Input() lineThickness: lineThickness = lineThickness.LIGHT;

  getLineStyle() {
    return `border : ${this.lineThickness}px solid black;`;
  }
}
