import { Component, Input } from '@angular/core';
import {
  HeadingSize,
  SplitColumnsPosition,
  PaddingSize,
  SplitColumnsSize,
  ImageShape,
} from 'src/app/ui/typedefs';
@Component({
  selector: 'block-banner',
  template: `
    <ui-block
      [colStart]="3"
      [colEnd]="12"
      [optionalGrid]="true"
      [optionalColStart]="1"
      [optionalColEnd]="13"
      [PaddingTop]="0"

    >
      <ui-image optional [imageSrc]="this.backgroundImgSrc" style="z-index:-1;">
      </ui-image>

      <ui-columns-split-type
        [split]="SplitColumnsPosition.RIGHT"
        [splitSize]="SplitColumnsSize.LARGE"
      >
        <ui-container
        class="push-to-front">
          <ui-container
            [padding]="[
              PaddingSize.MID,
              PaddingSize.XLARGE,
              PaddingSize.MID,
              PaddingSize.LARGE
            ]"
          >
            <ng-content select="ui-heading"></ng-content>
            <ng-content select="ui-button"></ng-content>
          </ui-container>

          <ui-container>
            <ng-content select="[subtitle]"> </ng-content>
          </ui-container>
        </ui-container>
        <element-table-of-contents class="push-to-front">
          <ng-content select="[table-of-contents]"> </ng-content>
        </element-table-of-contents>
      </ui-columns-split-type>
    </ui-block>
  `,
  styleUrls: ['./block-banner.component.scss'],
})
export class BlockBannerComponent {
  @Input() headingContent: string = '';
  @Input() textContent: string = '';

  @Input() backgroundImgSrc: string = '';

  HeadingSize = HeadingSize;
  SplitColumnsPosition = SplitColumnsPosition;
  PaddingSize = PaddingSize;
  SplitColumnsSize = SplitColumnsSize;
  ImageShape = ImageShape;
}
