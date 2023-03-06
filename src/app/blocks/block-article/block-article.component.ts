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
    <ui-block class="center-content">
      <ui-columns>
        <ui-container *ngFor="let elem of [1, 2, 3, 4, 5]">
          <element-card
            [imageSrc]="'./assets/square.jpg'"
            [articleText]="
              'Aliquam sit amet leo a nisi elementum blandit eget et ligula. Curabitur
      egestas metus at magna suscipit sollicitudin. Ut vulputate dignissim est
      eu blandit. Duis laoreet neque turpis.'
            "
          >
          </element-card>
        </ui-container>
      </ui-columns>
    </ui-block>
  `,
  styleUrls: ['./block-article.component.scss'],
})
export class BlockArticleComponent {
  HeadingSize = HeadingSize;
  ImageShape = ImageShape;
  SplitColumnsSize = SplitColumnsSize;
}
