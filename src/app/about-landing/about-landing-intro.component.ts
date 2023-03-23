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
  selector: 'about-page-intro',
  template: ` <block-text [headingHr]="true">
      <ui-heading>About the Province</ui-heading>
      <ui-text>
        Rizal is one of the Philippines' first class provinces that belongs to
        the CALABARZON (CA-vite, LA-guna, BA-tangas, R-izal, Que-ZON) Region or
        Region IV-A in the island of Luzon. The province contains a natural
        beauty that is a perfect setting for investments, business
        establishments and settlements. It is bounded by the Sierra Madre
        Mountain Ranges and Quezon Province in the east, the province of Laguna
        in the southwest, the province of Bulacan in the north, Metro Manila in
        the west-northwest portion and by Laguna de Bay in south/south-western
        portion. Rizal is one of the neighboring provinces of Metro Manila. It
        takes an hour drive from major commercial districts and centers of the
        Metro to reach the province's best places.
      </ui-text>
    </block-text>
    <ui-container [paddingTop]="PaddingSize.XXLARGE">
      <ui-block>
        <ui-columns>
          <ui-container>
            <ui-heading> Our Vision </ui-heading>
            <hr />
            <ui-container [paddingTop]="PaddingSize.LARGE"> </ui-container>
            <ui-text>
              Rizal Province is committed to the promotion and modernization of
              socio-economic and environmental services by providing programs
              and activities for sustainable livelihood, institutionalization of
              disaster risk reduction and climate change adaptation, multi
              sector linkages and access to financing, proactive health care
              delivery, industry relevant education and value formation,
              dependable infrastructure support and human resource development,
              ecological management, and the preservation of cultural and
              historical sites achievable through effective, responsible and
              transparent governance.
            </ui-text>
          </ui-container>
          <ui-container>
            <ui-heading> Our Mission </ui-heading>
            <hr />
            <ui-container [paddingTop]="PaddingSize.LARGE"> </ui-container>
            <ui-text>
              "A peaceful, ecologically balance province with a progressive,
              creative and sustained multi-sector economy; the regional center
              for learning, culture and arts; endowed with equally accessible
              and advanced services and facilities for its God-loving, highly
              capable, disaster prepared and climate change resilient citizenry"
            </ui-text>
          </ui-container>
        </ui-columns>
      </ui-block>
    </ui-container>`,
  styleUrls: ['./about-landing.component.scss'],
})
export class AboutPageIntroComponent {
  FontWeight = FontWeight;
  HeadingSize = HeadingSize;
  PaddingSize = PaddingSize;
  SplitColumnsNumber = SplitColumnsNumber;
  SplitColumnsPosition = SplitColumnsPosition;
  SplitColumnsSize = SplitColumnsSize;
  ImageShape = ImageShape;
}
