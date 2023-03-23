import { Component, Input } from '@angular/core';
import {
  HeadingSize,
  PaddingSize,
  ImageShape,
  SplitColumnsSize,
} from 'src/app/ui/typedefs';
@Component({
  selector: 'block-navbar',
  template: `
    <ui-block [PaddingTop]="0">
      <ui-nav-bar> </ui-nav-bar>
    </ui-block>
  `,
  styleUrls: ['./block-navbar.component.scss'],
})
export class BlockNavbarComponent {
  HeadingSize = HeadingSize;
  ImageShape = ImageShape;
  PaddingSize = PaddingSize;
  SplitColumnsSize = SplitColumnsSize;
}
