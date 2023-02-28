import { Component, Input, OnInit } from '@angular/core';
import { SplitColumnsSize } from '../typedefs';

@Component({
  selector: 'ui-columns-three-split-type',
  template: `
    <div [style]="createColumns()">
      <div class="grid-wrapper">
        <ng-content></ng-content>
      </div>
    </div>
  `,
  styleUrls: ['./ui-columns-three-split-type.component.scss'],
})
export class UIColumnsThreeSplitComponent implements OnInit {
  @Input() splitSize: SplitColumnsSize = SplitColumnsSize.MID;

  ngOnInit() {}
  createColumns() {
    let splitSizes = [0, 0];
    switch (this.splitSize) {
      case SplitColumnsSize.SMALL:
        splitSizes = [1, 5, 1];
        break;
      case SplitColumnsSize.MID:
        splitSizes = [1, 3, 1];
        break;
      case SplitColumnsSize.LARGE:
        splitSizes = [1, 2, 1];
        break;
    }
    return `--left-width:${splitSizes[0]}fr; --center-width:${splitSizes[1]}fr; --right-width:${splitSizes[2]}fr;`;
  }
}
