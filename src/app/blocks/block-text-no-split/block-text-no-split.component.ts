import { Component, Input } from '@angular/core';
import {
  HeadingSize,
  SplitColumnsPosition,
  PaddingSize,
} from 'src/app/ui/typedefs';
@Component({
  selector: 'block-text-no-split',
  template: `
    <ui-block>
      <ui-container [paddingBottom]="PaddingSize.SMALL">
        <ng-content select="ui-heading"></ng-content>
        <hr *ngIf="this.headingHr" />
      </ui-container>

      <ui-columns>
        <ui-container>
          <ng-content select="ui-text"></ng-content>
        </ui-container>
      </ui-columns>
    </ui-block>
  `,
})
export class BlockTextNoSplitComponent {
  @Input() headingHr: boolean = false;

  HeadingSize = HeadingSize;
  SplitColumnsPosition = SplitColumnsPosition;
  PaddingSize = PaddingSize;
}
