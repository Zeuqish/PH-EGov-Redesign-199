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
    <div class="service-block">
      <ui-block>
        <ui-columns style="center-content">
          <ui-container [paddingBottom]="PaddingSize.LARGE">
            <ui-heading> Our Services </ui-heading>
          </ui-container>
        </ui-columns>
        <ui-columns style="center-content">
          <ui-container *ngFor="let service of services">
            <element-card-small
              [iconSrc]="service[1]"
              [cardText]="service[0]"
              [routerLink]="service[2]"
            >
            </element-card-small>
          </ui-container>
        </ui-columns>
      </ui-block>
    </div>
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
    ['Provincial ID Application', './assets/icon/id_card.svg', '/services/id'],
    [
      'Education Scholarships',
      './assets/icon/school.svg',
      '/services/education',
    ],
    [
      'Free COVID Assitance',
      './assets/icon/health_and_safety.svg',
      '/services/covid',
    ],
    [
      'Business Permit Application',
      './assets/icon/add_business.svg',
      '/services/business-permit',
    ],
  ];

  navigate() {}
}
