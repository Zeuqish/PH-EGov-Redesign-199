import { Component, Input } from '@angular/core';
import { PaddingSize } from '../typedefs';

@Component({
  selector: 'ui-container',
  template: `
    <div [style]="getComponentDetails()">
      <ng-content></ng-content>
    </div>
  `,
  styleUrls: ['./ui-container.component.scss'],
})
export class UIContainerComponent {
  @Input() padding: Array<Number> = [];

  @Input() paddingRight: number = PaddingSize.NONE;
  @Input() paddingLeft: number = PaddingSize.NONE;
  @Input() paddingTop: number = PaddingSize.NONE;
  @Input() paddingBottom: number = PaddingSize.NONE;

  @Input() paddingRightMobile: number = PaddingSize.NONE;
  @Input() paddingLeftMobile: number = PaddingSize.NONE;
  @Input() paddingTopMobile: number = PaddingSize.NONE;
  @Input() paddingBottomMobile: number = PaddingSize.NONE;

  private static emptyPadding = [
    PaddingSize.NONE,
    PaddingSize.NONE,
    PaddingSize.NONE,
    PaddingSize.NONE,
  ];

  getComponentDetails() {
    if (this.padding.length) {
      this.padding = UIContainerComponent.emptyPadding.map((e, i) =>
        this.padding[i] ? this.padding[i] : PaddingSize.NONE
      );
      return `padding: ${this.padding[0]}px ${this.padding[1]}px ${this.padding[2]}px ${this.padding[3]}px;
      `;
    } else {
      return `padding: ${this.paddingTop}px ${this.paddingRight}px ${this.paddingBottom}px ${this.paddingLeft}px;
      `;
    }
  }

  /*
@media ( min-width: 500px ) {
      padding: ${this.paddingTopMobile}px ${this.paddingRightMobile}px ${this.paddingBottomMobile}px ${this.paddingLeftMobile}px;
    }
  */
}
