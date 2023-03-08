import { Component, Input } from '@angular/core';
import {
  FontWeight,
  TextSize,
  HeadingSize,
  PaddingSize,
  IconSize,
} from 'src/app/ui/typedefs';

@Component({
  selector: 'element-card-small',
  template: ` <ui-container>
    <div class="card-border">
      <div class="center-icon">
        <ui-icon [iconSrc]="this.iconSrc" [iconSize]="this.iconSize"> </ui-icon>
      </div>

      <ui-heading [headingSize]="HeadingSize.HEADING_FIVE">
        {{ this.cardText }}
      </ui-heading>
    </div>
  </ui-container>`,

  styleUrls: ['./element-card-small.component.scss'],
})
export class ElementCardSmallComponent {
  @Input() textSize: number = TextSize.REGULAR;
  @Input() fontWeight: number = FontWeight.REGULAR;
  @Input() iconSize: IconSize = IconSize.XXLARGE;

  @Input() iconSrc: string = '';

  @Input() cardText: string = '';

  HeadingSize = HeadingSize;
  PaddingSize = PaddingSize;
}
