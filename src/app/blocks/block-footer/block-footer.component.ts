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
    <div class="footer">
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
              >
                {{ this.headingContent }}
              </ui-heading>
              <hr style="border: 2px solid black" />
              <ui-text>
                The Official Website of the {{ this.textContent }}
              </ui-text>
              <ui-container [paddingTop]="PaddingSize.XXSMALL">
                <ui-container>
                  <a [href]="data[0]" *ngFor="let data of socialMedia">
                    <ui-icon
                      [iconSize]="IconSize.XLARGE"
                      [iconSrc]="data[1]"
                      style="padding-right: 4px;"
                    ></ui-icon>
                  </a>
                </ui-container>
              </ui-container>
            </ui-container>
          </ui-columns-split-type>
        </ui-columns-split-type>
      </ui-block>
    </div>
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
    ['https://facebook.com/rizalprovincialgov', './assets/facebook_icon.png'],
    ['https://twitter.com/RizalGov', './assets/twitter_icon.png'],
    ['mailto:provinceofrizal@yahoo.com', './assets/email_icon.svg'],
  ];
}
