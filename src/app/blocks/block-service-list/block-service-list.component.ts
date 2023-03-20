import { Component, Input } from '@angular/core';
import {
  HeadingSize,
  SplitColumnsSize,
  PaddingSize,
  ImageShape,
} from 'src/app/ui/typedefs';
@Component({
  selector: 'block-service-list',
  template: `
    <ui-block>
      <ui-columns style="center-content">
        <ui-container [paddingBottom]="PaddingSize.LARGE">
          <ui-heading> Our Services </ui-heading>
        </ui-container>
      </ui-columns>
      <ui-columns style="center-content">
        <ui-container *ngFor="let service of services">
          <element-card-small [iconSrc]="service[1]" [cardText]="service[0]">
          </element-card-small>
        </ui-container>
      </ui-columns>
    </ui-block>
  `,
  styleUrls: ['./block-service-list.component.scss'],
})
export class BlockServiceListComponent {
  @Input() iconSrc: string = '';

  HeadingSize = HeadingSize;
  ImageShape = ImageShape;
  SplitColumnsSize = SplitColumnsSize;
  PaddingSize = PaddingSize;

  services = [
    ['Provincial ID Application', './assets/icon/id_card.svg'],
    ['Education Scholarships', './assets/icon/school.svg'],
    ['Health Updates', './assets/icon/health_and_safety.svg'],
    ['Investment Opportunity', './assets/icon/add_business.svg'],
  ];
}
