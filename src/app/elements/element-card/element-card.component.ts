import { Component, Input } from '@angular/core';
import {
  FontWeight,
  TextSize,
  HeadingSize,
  PaddingSize,
} from 'src/app/ui/typedefs';

@Component({
  selector: 'element-card',
  template: ` <ui-container>
    <div *ngIf="this.imageSrc; else noImageCard">
      <ui-container>
        <div style="max-width:150px;height:auto;">
          <ui-image [imageSrc]="this.imageSrc"> </ui-image>
        </div>

        <ui-heading [headingSize]="HeadingSize.HEADING_FIVE">
          {{ this.titleText }}
        </ui-heading>
        <ui-text> {{ this.articleText }} </ui-text>
        <ui-link [url]="this.articleLink">
          <ui-text> Read more... </ui-text>
        </ui-link>
      </ui-container>
    </div>

    <ng-template #noImageCard>
      <ui-container>
        <ui-heading> {{ this.titleText }}</ui-heading>
        <ui-text> {{ this.articleText }} </ui-text>
        <ui-link [url]="this.articleLink">Read more...</ui-link>
      </ui-container>
    </ng-template>
  </ui-container>`,

  styleUrls: ['./element-card.component.scss'],
})
export class ElementCardComponent {
  @Input() textSize: number = TextSize.REGULAR;
  @Input() fontWeight: number = FontWeight.REGULAR;

  @Input() imageSrc: string = '';

  @Input() titleText: string = 'This is a title';
  @Input() articleText: string = "This is an article's intro text";
  @Input() articleLink: string = '';

  HeadingSize = HeadingSize;
  PaddingSize = PaddingSize;
}
