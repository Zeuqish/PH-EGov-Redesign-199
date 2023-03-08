import { Component, Input } from '@angular/core';
import { TooltipPosition } from '../typedefs';

@Component({
  selector: 'ui-tooltip',
  template: `
  <div class="tooltip"><ng-content></ng-content>
    <span *ngIf="position=='right'"  class="tooltiptextright">{{tooltiptext}}</span>
    <span *ngIf="position=='left'"  class="tooltiptextleft">{{tooltiptext}}</span>
    <span *ngIf="position=='top'"  class="tooltiptexttop">{{tooltiptext}}</span>
    <span *ngIf="position=='bottom'"  class="tooltiptextbottom">{{tooltiptext}}</span>
  </div>
  `,

  styleUrls: ['./ui-tooltip.component.scss'],
})
export class UITooltipComponent {
  @Input() tooltiptext: String = 'Tooltip'
  @Input() position: TooltipPosition = TooltipPosition.RIGHT;
}
