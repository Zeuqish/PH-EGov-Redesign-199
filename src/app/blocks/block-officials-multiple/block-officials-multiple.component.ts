import { Component, Input } from '@angular/core';
import {
  HeadingSize,
  SplitColumnsSize,
  PaddingSize,
  ImageShape,
  CardSmallBorderSize,
} from 'src/app/ui/typedefs';
@Component({
  selector: 'block-officials-multiple',
  template: `
    <ui-block>
      <ui-columns style="center-content">
        <ui-container [paddingBottom]="PaddingSize.LARGE">
          <ui-heading> Your Officials </ui-heading>
        </ui-container>
      </ui-columns>

      <ui-columns style="center-content grid-row">
        <ui-container
          *ngFor="let officer of officers"
          style="height:100%; width: 100%"
        >
          <element-card-small
            [iconSrc]="officer[1]"
            [cardText]="officer[0]"
            [optionalCardSubText]="officer[2]"
            [width]="CardSmallBorderSize.MAX"
          >
          </element-card-small>
        </ui-container>
      </ui-columns>
    </ui-block>
  `,
  styleUrls: ['./block-officials-multiple.component.scss'],
})
export class BlockOfficialsMultComponent {
  @Input() iconSrc: string = '';

  HeadingSize = HeadingSize;
  ImageShape = ImageShape;
  SplitColumnsSize = SplitColumnsSize;
  PaddingSize = PaddingSize;
  CardSmallBorderSize = CardSmallBorderSize;

  officers = [
    ['Officer 1', './assets/icon1.svg', 'President'],
    ['Officer 2', './assets/icon1.svg', 'Vice President'],
    ['Officer 3', './assets/icon1.svg', 'Secretary of Internal Affairs'],
    ['Officer 4', './assets/icon1.svg', 'Chairman of the Board'],
  ];
}
