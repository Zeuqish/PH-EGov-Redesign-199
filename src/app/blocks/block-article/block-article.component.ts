import { Component, Input } from '@angular/core';
import {
  HeadingSize,
  SplitColumnsSize,
  PaddingSize,
  ImageShape,
} from 'src/app/ui/typedefs';
@Component({
  selector: 'block-article',
  template: `
    <ui-block>
      <ui-columns class="center-content">
        <ui-container [paddingBottom]="PaddingSize.LARGE">
          <ui-heading> Latest Articles </ui-heading>
        </ui-container>
      </ui-columns>
      <ui-columns class="center-content">
        <ng-content></ng-content>
      </ui-columns>
    </ui-block>
  `,
  styleUrls: ['./block-article.component.scss'],
})
export class BlockArticleComponent {
  HeadingSize = HeadingSize;
  ImageShape = ImageShape;
  SplitColumnsSize = SplitColumnsSize;
  PaddingSize = PaddingSize;
}
