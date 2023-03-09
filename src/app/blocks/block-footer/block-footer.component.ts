import { Component, Input } from '@angular/core';
import {
  HeadingSize,
  SplitColumnsSize,
  PaddingSize,
  ImageShape,
  IconSize,
  SplitColumnsPosition,
} from 'src/app/ui/typedefs';
@Component({
  selector: 'block-footer',
  template: `
    <ui-block class="center-content">
      <ui-columns-split-type
        [split]="SplitColumnsPosition.RIGHT"
        [splitSize]="SplitColumnsSize.LARGE"
      >
        <ui-columns-split-type [splitSize]="SplitColumnsSize.SMALL">
          <div style="width:100px">
            <ui-image
              [imageShape]="ImageShape.CIRCLE"
              [imageSrc]="this.imageSrc"
            >
            </ui-image>
          </div>
          <ui-container>
            <ui-heading
              class="header-text"
              [headingSize]="HeadingSize.HEADING_FIVE"
              >{{ this.headingContent }}</ui-heading
            >
            <ui-hr></ui-hr>
            <ui-text>
              The Official Website of the {{ this.textContent }}
            </ui-text>
            <ui-container [paddingTop]="PaddingSize.XXSMALL">
              <ui-container>
                <a [href]="data[0]" *ngFor="let data of socialMedia">
                  <ui-icon
                    [iconSize]="IconSize.XLARGE"
                    [iconSrc]="data[1]"
                  ></ui-icon>
                </a>
              </ui-container>
            </ui-container>
          </ui-container>
        </ui-columns-split-type>
        <ui-container>
          <ui-heading [headingSize]="HeadingSize.HEADING_FIVE"
            >Contact Us</ui-heading
          >
          <ui-text>Tel. No. 1234-5678</ui-text>
          <ui-text
            >Circumferencial Road cor. P. Oliveros St.,Ynares Center Complex,
            Antipolo City, 1870.</ui-text
          >
        </ui-container>
      </ui-columns-split-type>
    </ui-block>
  `,
  styleUrls: ['./block-footer.component.scss'],
})
export class BlockFooterComponent {
  @Input() imageSrc: string = '';

  @Input() headingContent: string = 'PROVINCE OF RIZAL';
  @Input() textContent: string = 'Province of Rizal';

  HeadingSize = HeadingSize;
  ImageShape = ImageShape;
  SplitColumnsSize = SplitColumnsSize;
  IconSize = IconSize;
  PaddingSize = PaddingSize;
  SplitColumnsPosition = SplitColumnsPosition;

  socialMedia = [
    ['www.facebook.com', './assets/icon1.svg'],
    ['www.google.com', './assets/icon1.svg'],
    ['www.youtube.com', './assets/icon1.svg'],
    ['www.instagram.com', './assets/icon1.svg'],
  ];
}
