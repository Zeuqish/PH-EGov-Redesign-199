import { Component, Input } from '@angular/core';
import {
  FontWeight,
  TextSize,
  HeadingSize,
  PaddingSize,
  FontColor,
} from 'src/app/ui/typedefs';

@Component({
  selector: 'element-table-of-contents',
  template: `
    <div class="toc-component center">
      <ui-container
        [padding]="[
          PaddingSize.MID,
          PaddingSize.XLARGE,
          PaddingSize.MID,
          PaddingSize.LARGE
        ]"
      >
        <ui-heading
          [headingSize]="HeadingSize.HEADING_SIX"
          [fontColor]="headerFontColor"
        >
          <div style="padding-top: 24px;">{{ this.tocHeader }}</div>
        </ui-heading>
        <ui-text [fontColor]="textFontColor">
          <ng-content></ng-content>
        </ui-text>
      </ui-container>
    </div>
  `,
  styleUrls: ['./element-table-of-contents.component.scss'],
})
export class ElementTableOfContentsComponent {
  @Input() textSize: number = TextSize.REGULAR;
  @Input() fontWeight: number = FontWeight.REGULAR;

  @Input() headerFontColor: FontColor = FontColor.DARK;
  @Input() textFontColor: FontColor = FontColor.DARK;

  @Input() tocHeader: string = 'In this page...';

  HeadingSize = HeadingSize;
  PaddingSize = PaddingSize;
  FontColor = FontColor;
}
