import { Component, Input } from '@angular/core';
import {
  HeadingSize,
  SplitColumnsPosition,
  PaddingSize,
  FontColor,
} from 'src/app/ui/typedefs';
@Component({
  selector: 'block-article-title',
  template: `
    <ui-block>
      <ui-container
        [paddingTop]="PaddingSize.XXLARGE"
        [paddingBottom]="PaddingSize.XXLARGE"
      >
        <ui-columns>
          <ui-container>
            <ui-heading><ng-content></ng-content></ui-heading>
            <ng-content select="ui-text"></ng-content>
          </ui-container>
        </ui-columns>
      </ui-container>
    </ui-block>
  `,
  styleUrls: ['./block-article-title.component.scss'],
})
export class BlockArticleTitleComponent {
  HeadingSize = HeadingSize;
  SplitColumnsPosition = SplitColumnsPosition;
  PaddingSize = PaddingSize;
  FontColor = FontColor;
}
