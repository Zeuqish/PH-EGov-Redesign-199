import { Component, Input } from '@angular/core';
import {
  HeadingSize,
  SplitColumnsSize,
  PaddingSize,
  ImageShape,
  IconSize,
  SplitColumnsPosition,
  TextSize,
} from 'src/app/ui/typedefs';
@Component({
  selector: 'block-sitemap',
  template: `
  <div class="site-map">
    <ui-block class="center-content">
    <ui-columns style="center-content grid-row">
        <ui-container>
          <ui-heading [headingSize]="HeadingSize.HEADING_SIX"><div class="site-heading">Services</div></ui-heading>
          <ul class="site-map-list">
            <li><ui-link>Business Permit</ui-link></li>
            <li><ui-link>Education Scholarships</ui-link></li>
            <li><ui-link>Free COVID Assitance</ui-link></li>
            <li><ui-link>Provincial ID Application</ui-link></li>
          </ul>
        </ui-container>
        <ui-container>
          <ui-heading [headingSize]="HeadingSize.HEADING_SIX"><div class="site-heading">About</div></ui-heading>
          <ul class="site-map-list">
            <li><ui-link>Mission and Vision</ui-link></li>
            <li><ui-link>History</ui-link></li>
            <li><ui-link>Governors</ui-link></li>
          </ul>
        </ui-container>
        <ui-container>
          <ui-heading [headingSize]="HeadingSize.HEADING_SIX"><div class="site-heading">Government Links</div></ui-heading>
          <ul class="site-map-list">
            <li><a href="">Official Gazette</a></li>
            <li><a href="">Office of the President</a></li>
            <li><a href="">Senate of the Philippines</a></li>
            <li><a href="">House of Representatives</a></li>
            <li><a href="">Supreme Court</a></li>
            <li><a href="">Court of Appeals</a></li>
            <li><a href="">Sandigan Bayan</a></li>
          </ul>
        </ui-container>
        <ui-container>
          <ui-heading [headingSize]="HeadingSize.HEADING_SIX"><div class="site-heading">Contact Us</div></ui-heading>
          <ul class="site-map-text">
            <li>Tel. No. 1234-5678</li>
            <li>Circumferencial Road cor. P. Oliveros St.,Ynares Center Complex,
              Antipolo City, 1870.</li>
          </ul>
        </ui-container>
      </ui-columns>
    </ui-block>
  </div>
  `,
  styleUrls: ['./block-sitemap.component.scss'],
})
export class BlockSitemapComponent {
  @Input() imageSrc: string = '';

  @Input() headingContent: string = 'PROVINCE OF RIZAL';
  @Input() textContent: string = 'Province of Rizal';

  HeadingSize = HeadingSize;
  ImageShape = ImageShape;
  SplitColumnsSize = SplitColumnsSize;
  IconSize = IconSize;
  PaddingSize = PaddingSize;
  SplitColumnsPosition = SplitColumnsPosition;
  TextSize = TextSize;

  socialMedia = [
    ['https://facebook.com/rizalprovincialgov', './assets/facebook_icon.png'],
    ['https://twitter.com/RizalGov', './assets/twitter_icon.png'],
    ['mailto:provinceofrizal@yahoo.com', './assets/email_icon.svg'],
  ];
}
