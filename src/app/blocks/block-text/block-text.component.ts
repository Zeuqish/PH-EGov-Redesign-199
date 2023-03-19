import { Component, Input } from '@angular/core';
import {
  HeadingSize,
  SplitColumnsPosition,
  PaddingSize,
} from 'src/app/ui/typedefs';
@Component({
  selector: 'block-text',
  template: `
    <ui-block>
      <ui-container [paddingBottom]="PaddingSize.LARGE">
        <ng-content select="ui-heading"></ng-content>
      </ui-container>
      <ui-columns-split-type [split]="this.splitType">
        <ui-container *ngIf="this.splitType == SplitColumnsPosition.LEFT">
          <ng-content select="[left]"></ng-content>
        </ui-container>
        <ui-container>
          <ng-content select="ui-text"></ng-content>
        </ui-container>
        <ui-container *ngIf="this.splitType == SplitColumnsPosition.RIGHT">
          <ng-content select="[right]"></ng-content>
        </ui-container>
      </ui-columns-split-type>
    </ui-block>
  `,
  styleUrls: ['./block-text.component.scss'],
})
export class BlockTextComponent {
  @Input() splitType: SplitColumnsPosition = SplitColumnsPosition.LEFT;

  HeadingSize = HeadingSize;
  SplitColumnsPosition = SplitColumnsPosition;
  PaddingSize = PaddingSize;
}
