import { Component, Input } from '@angular/core';
import {
  HeadingSize,
  SplitColumnsSize,
  PaddingSize,
  ImageShape,
  CardSmallBorderSize,
} from 'src/app/ui/typedefs';
@Component({
  selector: 'block-awards',
  template: `
    <ui-block class = "awards">
      <ui-columns style="center-content">
        <ui-container [paddingBottom]="PaddingSize.LARGE">
          <ui-heading> Rizal Province Awards </ui-heading>
        </ui-container>
      </ui-columns>

      <ui-columns style="center-content grid-row">
        <ui-container
          *ngFor="let award of main_awards"
          style="height:100%; width: 100%"
        >
          <element-card-xsmall
            [iconSrc]="award[1]"
            [cardText]="award[0]"
            [optionalCardSubText]="award[2]"
            [width]="CardSmallBorderSize.MAX"
          >
          </element-card-xsmall>
        </ui-container>
      </ui-columns>
      <ui-columns style="center-content grid-row">
        <ui-container
          *ngFor="let award of sub_awards"
          style="height:100%; width: 100%"
        >
          <element-card-xsmall
            [iconSrc]="award[1]"
            [cardText]="award[0]"
            [optionalCardSubText]="award[2]"
            [width]="CardSmallBorderSize.MAX"
          >
          </element-card-xsmall>
        </ui-container>
      </ui-columns>
    </ui-block>
  `,
  styleUrls: ['./block-awards.component.scss'],
})
export class BlockAwardsComponent {
  @Input() iconSrc: string = '';

  HeadingSize = HeadingSize;
  ImageShape = ImageShape;
  SplitColumnsSize = SplitColumnsSize;
  PaddingSize = PaddingSize;
  CardSmallBorderSize = CardSmallBorderSize;

  main_awards = [
    ['TOP 1 MOST COMPETITIVE PROVINCE IN THE PHILIPPINES', './assets/icon/award_medal.svg', '2016, 2017, 2018, 2019, 2020, 2021','2001-2004 / 2013 - present'],
    ['SECOND RICHEST PROVINCE IN THE PHILIPPINES', './assets/icon/award_medal.svg', '2015, 2016, 2017'],
    ['SEAL OF GOOD LOCAL GOVERNANCE', './assets/icon/award_medal.svg', ''],
  ];

  sub_awards = [
    ['POINT OF CARE PROGRAM RECOGNITION', './assets/icon/award_icon.svg', '2015 - DOH'],
    ['TOP 1 PROVINCE IN THE CALABARZON REGION FOR SURPASING CY 2015 TARGETED INCREASE IN THE TOTAL TAXABLE ASSESED VALUATION', './assets/icon/award_icon.svg', '2015 - BLGF'],
    ['TOP 1 PROVINCE IN THE CALABARZON REGION FOR SURPASSING THE CY 2015 REVENUE COLLECTION TARGET FROM FEES AND CHARGES', './assets/icon/award_icon.svg', '2015 - BLGF'],
    ['LOWEST MATERNAL MORTALITY RECOGNITION ', './assets/icon/award_icon.svg', '2015 - CHD-DOH'],
  ];
}
