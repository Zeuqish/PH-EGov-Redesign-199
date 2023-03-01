import { Component, Input } from '@angular/core';
import {
  FontWeight,
  TextSize,
  HeadingSize,
  PaddingSize,
} from 'src/app/ui/typedefs';

@Component({
  selector: 'element-table-of-contents',
  template: `
    <div class="toc-component">
      <ui-container
        [padding]="[
          PaddingSize.SMALL,
          PaddingSize.SMALL,
          PaddingSize.XSMALL,
          PaddingSize.LARGE
        ]"
      >
        <ui-heading [headingSize]="HeadingSize.HEADING_FIVE">
          {{ this.tocHeader }}
        </ui-heading>
        <ui-text>
          <ng-content></ng-content>
        </ui-text>
      </ui-container>
    </div>
  `,
  styleUrls: ['./element-table-of-contents.component.scss'],
})
export class ElementTableOfContentsComponent {
  @Input() textSize: number = TextSize.REGULAR;
  @Input() fontWeight: number = FontWeight.REGULAR;

  @Input() tocHeader: string = 'In this page...';

  HeadingSize = HeadingSize;
  PaddingSize = PaddingSize;
}
