import { Component, Input } from '@angular/core';
import {
  HeadingSize,
  PaddingSize,
  ImageShape,
  SplitColumnsSize,
} from 'src/app/ui/typedefs';
@Component({
  selector: 'block-officials-single',
  template: `
    <ui-block [colStart]="3" [colEnd]="11">
      <ui-columns style="center-content">
        <ui-container [paddingBottom]="PaddingSize.LARGE">
          <ui-heading> Your Officials </ui-heading>
        </ui-container>
      </ui-columns>

      <div style="border:3px solid black; padding: 10px;">
        <ui-columns-split-type
          [splitSize]="SplitColumnsSize.SMALL"
          class="center-content"
        >
          <ui-container>
            <ui-image
              [imageSrc]="this.imgSrc"
              [imageShape]="ImageShape.CIRCLE"
            ></ui-image>
          </ui-container>
          <ui-container>
            <ng-content></ng-content>
          </ui-container>
        </ui-columns-split-type>
      </div>
    </ui-block>
  `,
  styleUrls: ['./block-officials-single.component.scss'],
})
export class BlockOfficialsSingleComponent {
  @Input() imgSrc: string = '';

  HeadingSize = HeadingSize;
  ImageShape = ImageShape;
  PaddingSize = PaddingSize;
  SplitColumnsSize = SplitColumnsSize;
}
