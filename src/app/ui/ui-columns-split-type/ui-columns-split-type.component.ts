import { Component, Input, OnInit, ContentChild } from '@angular/core';
import { ConditionalContentDirective } from 'src/app/conditional-content.directive';
import {
  SplitColumnsNumber,
  SplitColumnsPosition,
  SplitColumnsSize,
} from '../typedefs';

@Component({
  selector: 'ui-columns-split-type',
  template: `
    <div *ngIf="this.numColumns == twoColumns">
      <ng-container [ngTemplateOutlet]="content.templateRef"></ng-container>
    </div>

    <ng-template
      appConditionalContent
      class="columns-split-two"
      [style]="createColumns()"
    >
      <ng-content></ng-content>
    </ng-template>
  `,
  styleUrls: ['./ui-columns-split-type.component.scss'],
})
export class UIColumnsSplitComponent implements OnInit {
  @Input() numColumns: SplitColumnsNumber = SplitColumnsNumber.TWO;
  @Input() split: SplitColumnsPosition = SplitColumnsPosition.NONE;
  @Input() splitSize: SplitColumnsSize = SplitColumnsSize.MID;

  @ContentChild(ConditionalContentDirective)
  content!: ConditionalContentDirective;

  twoColumns = SplitColumnsNumber.TWO;

  ngOnInit() {}
  createColumns() {
    if (this.numColumns == SplitColumnsNumber.TWO) {
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
      return `display: grid; gap: 1rem; grid-template-columns: repeat(1, ${splitSizes[0]}fr ${splitSizes[1]}fr);`;
    } else if (this.numColumns == SplitColumnsNumber.THREE) {
      return `display: grid; gap: 1rem; grid-template-columns: 1 fr 3fr 1fr;`;
    } else {
      return ``;
    }
  }
}
