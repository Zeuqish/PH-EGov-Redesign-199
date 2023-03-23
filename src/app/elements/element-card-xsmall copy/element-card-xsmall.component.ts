import { Component, Input } from '@angular/core';
import {
  FontWeight,
  TextSize,
  HeadingSize,
  PaddingSize,
  IconSize,
  ImageShape,
  CardSmallBorderSize,
} from 'src/app/ui/typedefs';
@Component({
  selector: 'element-card-xsmall',
  template: `<ui-container>
    <div class="card-border" [style]="getCardBorderWidth()">
      <div class="center-icon">
        <ui-icon [iconSrc]="this.iconSrc" [iconSize]="this.iconSize"> </ui-icon>
      </div>

      <ui-heading
        class="service-title"
        [headingSize]="HeadingSize.HEADING_SIX"
      >
        {{ this.cardText }}
      </ui-heading>
      <ui-text [textSize]="TextSize.SMALL"> {{ this.optionalCardSubText }} </ui-text>
    </div>
  </ui-container>`,

  styleUrls: ['./element-card-xsmall.component.scss'],
})
export class ElementCardXsmallComponent {
  @Input() textSize: number = TextSize.REGULAR;
  @Input() fontWeight: number = FontWeight.REGULAR;
  @Input() iconSize: IconSize = IconSize.XXLARGE;

  @Input() iconSrc: string = '';

  @Input() cardText: string = '';
  @Input() optionalCardSubText: string = '';

  @Input() width: CardSmallBorderSize = CardSmallBorderSize.MAX;

  HeadingSize = HeadingSize;
  PaddingSize = PaddingSize;
  ImageShape = ImageShape;
  TextSize = TextSize;

  getCardBorderWidth() {
    if (this.width == CardSmallBorderSize.FIT) {
      return `width: fit-content;`;
    } else if (this.width == CardSmallBorderSize.MAX) {
      return `width: 100% - 10px;`;
    } else {
      return ``;
    }
  }
}

