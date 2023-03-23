import { Component } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import {
  FontWeight,
  HeadingSize,
  PaddingSize,
  SplitColumnsNumber,
  SplitColumnsPosition,
  SplitColumnsSize,
  ImageShape,
} from '../ui/typedefs';

@Component({
  selector: 'app-about-page-handler',
  template: `<div class="background">
      <block-banner [tocHeader]="'Jump to...'">
        <ui-heading class="welcome"> Learn About Rizal Province </ui-heading>
        <ui-heading [headingSize]="HeadingSize.HEADING_SIX"
          ><div class="sub-welcome">
            Discover more about Rizal's History, Past Governors, as well as
            other general information about the province and its people.
          </div>
        </ui-heading>

        <ui-container table-of-contents>
          <ul class="table-of-contents">
            <li *ngFor="let link of links">
              <ui-link [url]="link.page" class="toc-list">
                {{ link.text }}
              </ui-link>
            </li>
          </ul>
        </ui-container>
      </block-banner>
    </div>

    <router-outlet> </router-outlet>`,
  styleUrls: ['./about-landing.component.scss'],
})
export class AboutPageComponent {
  FontWeight = FontWeight;
  HeadingSize = HeadingSize;
  PaddingSize = PaddingSize;
  SplitColumnsNumber = SplitColumnsNumber;
  SplitColumnsPosition = SplitColumnsPosition;
  SplitColumnsSize = SplitColumnsSize;
  ImageShape = ImageShape;

  links = [
    { page: './', text: 'About the Province' },
    { page: './history', text: 'Our History' },
    { page: './governors', text: 'Past Governors' },
  ];
}
