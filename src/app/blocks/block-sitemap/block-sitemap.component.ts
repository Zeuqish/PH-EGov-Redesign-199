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
            <ui-heading [headingSize]="HeadingSize.HEADING_SIX"
              ><div class="site-heading">Services</div></ui-heading
            >
            <ul class="site-map-list">
              <li>
                <ui-link [url]="'/services/business-permit'">
                  Business Permit Application
                </ui-link>
              </li>
              <li>
                <ui-link [url]="'/services/education'">
                  Education Scholarships
                </ui-link>
              </li>
              <li>
                <ui-link [url]="'/services/covid'">
                  Free COVID Assitance
                </ui-link>
              </li>
              <li>
                <ui-link [url]="'/services/id'">
                  Provincial ID Application
                </ui-link>
              </li>
            </ul>
          </ui-container>
          <ui-container>
            <ui-heading [headingSize]="HeadingSize.HEADING_SIX">
              <div class="site-heading">About</div>
            </ui-heading>
            <ul class="site-map-list">
              <li>
                <ui-link [url]="'/about'" [url_fragment]="'vision'">
                  Mission and Vision
                </ui-link>
              </li>
              <li><ui-link [url]="'/about/history'">History</ui-link></li>
              <li><ui-link [url]="'/about/governors'">Governors</ui-link></li>
            </ul>
          </ui-container>
          <ui-container>
            <ui-heading [headingSize]="HeadingSize.HEADING_SIX">
              <div class="site-heading">Government Links</div>
            </ui-heading>
            <ul class="site-map-list">
              <li><a href="https://www.gov.ph/">Official Gazette</a></li>
              <li>
                <a href="http://www.president.gov.ph/"
                  >Office of the President</a
                >
              </li>
              <li>
                <a href="http://www.ovp.gov.ph/">Senate of the Philippines</a>
              </li>
              <li>
                <a href="https://www.congress.gov.ph/">
                  House of Representatives
                </a>
              </li>
              <li><a href="https://sc.judiciary.gov.ph/">Supreme Court</a></li>
              <li>
                <a href="https://ca2.judiciary.gov.ph/">Court of Appeals</a>
              </li>
              <li><a href="https://sb.judiciary.gov.ph/">Sandigan Bayan</a></li>
            </ul>
          </ui-container>
          <ui-container>
            <ui-heading [headingSize]="HeadingSize.HEADING_SIX"
              ><div class="site-heading">Contact Us</div></ui-heading
            >
            <ul class="site-map-text">
              <li>Tel. No. 1234-5678</li>
              <li>
                Circumferencial Road cor. P. Oliveros St.,Ynares Center Complex,
                Antipolo City, 1870.
              </li>
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
