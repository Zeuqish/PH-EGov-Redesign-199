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
  selector: 'element-officials-card-small',
  template: `<ui-container>
    <div class="card-border" [style]="getCardBorderWidth()">
      <div class="center-icon" style="max-width:75%">
        <ui-image
          [imageSrc]="this.imgSrc"
          [imageShape]="ImageShape.SQUARE"
        ></ui-image>
      </div>

      <ui-heading
        class="service-title"
        [headingSize]="HeadingSize.HEADING_FIVE"
      >
        {{ this.cardText }}
      </ui-heading>
      <ui-text> {{ this.optionalCardRole }} </ui-text>
      <ui-text [textSize]="TextSize.XSMALL">
        {{ this.optionalCardSubText }}
      </ui-text>
    </div>
  </ui-container>`,

  styleUrls: ['./element-officials-card-small.component.scss'],
})
export class ElementOfficialsCardSmallComponent {
  @Input() textSize: number = TextSize.REGULAR;
  @Input() fontWeight: number = FontWeight.REGULAR;
  @Input() iconSize: IconSize = IconSize.XXLARGE;

  @Input() imgSrc: string = '';

  @Input() cardText: string = '';
  @Input() optionalCardSubText: string = '';
  @Input() optionalCardRole: string = '';

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
