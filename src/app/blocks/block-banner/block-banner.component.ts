import { Component, Input, OnInit } from '@angular/core';
import {
  HeadingSize,
  SplitColumnsPosition,
  PaddingSize,
  SplitColumnsSize,
  ImageShape,
  FontColor,
} from 'src/app/ui/typedefs';
@Component({
  selector: 'block-banner',
  template: `
    <ui-block
      [colStart]="3"
      [colEnd]="11"
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
        <ui-container class="push-to-front">
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
        <element-table-of-contents
          class="push-to-front"
          [tocHeader]="this.tocHeader"
          [headerFontColor]="contentColor"
          [textFontColor]="contentColor"
        >
          <ng-content select="[table-of-contents]"> </ng-content>
        </element-table-of-contents>
      </ui-columns-split-type>
    </ui-block>
  `,
  styleUrls: ['./block-banner.component.scss'],
})
export class BlockBannerComponent implements OnInit {
  @Input() headingContent: string = '';
  @Input() textContent: string = '';

  @Input() tocHeader: string = 'In this page...';

  @Input() backgroundImgSrc: string = '';
  @Input() textDark: boolean = true;

  contentColor = FontColor.DARK;

  FontColor = FontColor;
  HeadingSize = HeadingSize;
  SplitColumnsPosition = SplitColumnsPosition;
  PaddingSize = PaddingSize;
  SplitColumnsSize = SplitColumnsSize;
  ImageShape = ImageShape;

  ngOnInit() {
    if (this.textDark === false) {
      this.contentColor = FontColor.LIGHT;
    }
  }
}
