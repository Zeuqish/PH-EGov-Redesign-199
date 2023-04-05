import { Component } from '@angular/core';
import { HeadingSize, SplitColumnsPosition } from 'src/app/ui/typedefs';

@Component({
  selector: 'services-business',
  template: `
    <div class="background">
      <block-banner [textDark]="false">
        <ui-heading class="welcome">
          <div class="welcome">How To Get Business Permit</div>
        </ui-heading>
        <ui-button> Visit E-Service Form </ui-button>

        <ui-container table-of-contents>
          <ul class="table-of-contents">
            <li *ngFor="let link of links">
              <ui-scrollable-link [target]="link.id" class="toc-list">
                {{ link.text }}
              </ui-scrollable-link>
            </li>
          </ul>
        </ui-container>
      </block-banner>
    </div>

    <ui-block>
      <ui-heading> How to Apply for a Business Permit</ui-heading>
    </ui-block>
    <ui-block id="requirements">
      <ui-heading [headingSize]="HeadingSize.HEADING_FOUR">
        Requirements
      </ui-heading>
      <hr />
      <ui-text>
        <ul>
          <li>2022 Tax Bill and Official Receipt of Business Tax Payment</li>
          <li>2022 Breakdown of Sales</li>
          <li>2021 Annual Income Tax Returns</li>
        </ul>
      </ui-text>
    </ui-block>
    <block-text
      [splitType]="SplitColumnsPosition.RIGHT"
      [headingHr]="true"
      id="online"
    >
      <ui-heading [headingSize]="HeadingSize.HEADING_FOUR"> Online </ui-heading>
      <ui-text>
        In order to get a Business Permit, log in to your online e-services
        account and visit the Business tab. Navigate to the Business Permit
        section. This section will contain further instructions.
      </ui-text>
    </block-text>
    <block-text
      [splitType]="SplitColumnsPosition.RIGHT"
      id="offline"
      [headingHr]="true"
    >
      <ui-heading [headingSize]="HeadingSize.HEADING_FOUR">
        Offline
      </ui-heading>
      <ui-text>
        In order to avail a Business Permit offline:
        <ol>
          <li>Acquire a Business Permit Form at the Office Helpdesk.</li>
          <li>Fill up the form and submit your requirements at Station 7a.</li>
          <li>
            Secure a signature from the Business Office and proceed to Station
            7b.
          </li>
          <li>
            Pay at the Banking Office and submit your receipt at Station 7b.
          </li>
          <li>Wait for the Business Office to contact you.</li>
        </ol>
      </ui-text>
    </block-text>
  `,
  styleUrls: ['../services.component.scss'],
})
export class ServicesBusinessComponent {
  HeadingSize = HeadingSize;
  SplitColumnsPosition = SplitColumnsPosition;

  links = [
    { id: 'requirements', text: 'Requirements' },
    { id: 'online', text: 'Online' },
    { id: 'offline', text: 'Offline' },
  ];
}
