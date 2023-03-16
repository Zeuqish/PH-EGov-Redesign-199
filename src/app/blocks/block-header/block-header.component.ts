import { Component, Input } from '@angular/core';
import {
  HeadingSize,
  SplitColumnsSize,
  PaddingSize,
  ImageShape,
} from 'src/app/ui/typedefs';
@Component({
  selector: 'block-header',
  template: `
    <ui-block class="center-content" [colStart]="4" [colEnd]="10">
      <ui-columns-split-type [splitSize]="SplitColumnsSize.SMALL">
        <div style="width:100px; margin:auto;">
          <ui-image [imageShape]="ImageShape.CIRCLE" [imageSrc]="this.imageSrc">
          </ui-image>
        </div>
        <ui-container>
          <ui-heading [headingSize]="30" class="header-text">
            {{ this.headingContent }}
          </ui-heading>
          <ui-hr></ui-hr>

          <ui-text class="sub-text">
            The Official Website of the {{ this.textContent }}
          </ui-text>
        </ui-container>
      </ui-columns-split-type>
    </ui-block>
  `,
  styleUrls: ['./block-header.component.scss'],
})
export class BlockHeaderComponent {
  @Input() imageSrc: string = './assets/logo/rizal_province_seal.png';

  @Input() headingContent: string = 'PROVINCE OF RIZAL';
  @Input() textContent: string = 'Province of Rizal';

  HeadingSize = HeadingSize;
  ImageShape = ImageShape;
  SplitColumnsSize = SplitColumnsSize;
}
