import { Component, Input } from '@angular/core';
import { LineColor, lineThickness } from 'src/app/ui/typedefs';
@Component({
  selector: 'ui-hr',
  template: `<hr [style]="getLineStyle()" />`,
  styleUrls: ['./ui-hr.component.scss'],
})
export class UIHrComponent {
  @Input() lineThickness: lineThickness = lineThickness.LIGHT;
  @Input() lineColor: LineColor = LineColor.BLACK;

  getLineStyle() {
    return `border : ${this.lineThickness}px solid ${this.lineColor};`;
  }
}
