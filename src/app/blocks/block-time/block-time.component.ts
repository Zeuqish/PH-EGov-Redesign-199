import { Component, Input } from '@angular/core';
import {
  IconSize,
} from 'src/app/ui/typedefs';
@Component({
  selector: 'block-time',
  template: `
    <ui-block
      [colStart]="1"
      [colEnd]="14"
      [PaddingTop]="0"
      [PaddingBottom]="0"
      class="block"
    >
    <div class="center-container">
      <div class="hotline-container">
      <ui-icon class="white"  [iconSize]="IconSize.MID" [iconSrc]="'./assets/icon/phone.svg'"></ui-icon>
      Emergency Hotlines | 8571-43-75 </div>
      <div class="time-container"><ui-clock></ui-clock></div>

      <div class="socmed-container"><ui-container>
        <a [href]="data[0]" *ngFor="let data of socialMedia">
          <ui-icon
            [iconSize]="IconSize.LARGE"
            [iconSrc]="data[1]"
            style="padding-right: 4px;"
          ></ui-icon>
        </a>
      </ui-container></div>
    </div>

    </ui-block>
  `,
  styleUrls: ['./block-time.component.scss'],
})
export class BlockTimeComponent {
  IconSize = IconSize

  socialMedia = [
    ['https://facebook.com/rizalprovincialgov', './assets/facebook_icon.png'],
    ['https://twitter.com/RizalGov', './assets/twitter_icon.png'],
  ];
}
