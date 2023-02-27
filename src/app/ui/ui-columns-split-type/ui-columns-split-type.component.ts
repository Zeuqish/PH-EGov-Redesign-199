import { Component, Input, OnInit } from '@angular/core';
import {
  SplitColumnsNumber,
  SplitColumnsPosition,
  SplitColumnsSize,
} from '../typedefs';

@Component({
  selector: 'ui-columns-split-type',
  template: `
    <div [style]="createColumns()">
      <div class="grid-wrapper">
        <ng-content></ng-content>
      </div>
    </div>
  `,
  styleUrls: ['./ui-columns-split-type.component.scss'],
})
export class UIColumnsSplitComponent implements OnInit {
  @Input() split: SplitColumnsPosition = SplitColumnsPosition.NONE;
  @Input() splitSize: SplitColumnsSize = SplitColumnsSize.MID;

  ngOnInit() {}
  createColumns() {
    let splitSizes = [0, 0];
    switch (this.splitSize) {
      case SplitColumnsSize.SMALL:
        splitSizes = [1, 5];
        break;
      case SplitColumnsSize.MID:
        splitSizes = [1, 3];
        break;
      case SplitColumnsSize.LARGE:
        splitSizes = [1, 2];
        break;
    }
    if (this.split == SplitColumnsPosition.RIGHT) {
      splitSizes.reverse();
    }
    //return `display: grid; gap: 1rem; grid-template-columns: ${splitSizes[0]}fr ${splitSizes[1]}fr;`;
    return `--left-width:${splitSizes[0]}fr; --right-width:${splitSizes[1]}fr`;
  }
}
