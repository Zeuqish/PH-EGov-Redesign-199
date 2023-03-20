import { Component } from '@angular/core';
import { HeadingSize, SplitColumnsPosition } from 'src/app/ui/typedefs';

@Component({
  selector: 'services-id',
  template: `
    <div class="background">
      <block-banner>
        <ui-heading class="welcome"> How To Get IDs </ui-heading>
        <ui-button> Visit E-Service </ui-button>

        <ui-container table-of-contents>
          <ul class="table-of-contents">
            <li *ngFor="let link of links">
              <ui-scrollable-link [target]="link.id">
                {{ link.text }}
              </ui-scrollable-link>
            </li>
          </ul>
        </ui-container>
      </block-banner>
    </div>

    <ui-block>
      <ui-heading [headingSize]="HeadingSize.HEADING_FIVE">
        Warning: This Page is only meant to showcase how local e-services could
        look. This page ONLY CONTAINS PLACEHOLDER text, and all contents here
        SHOULD NOT be used when applying for local government services.
      </ui-heading>
    </ui-block>

    <ui-block>
      <ui-heading> How to Get An ID</ui-heading>
    </ui-block>
    <ui-block id="requirements">
      <ui-heading [headingSize]="HeadingSize.HEADING_FOUR">
        Requirements
      </ui-heading>
      <hr />
      <ui-text>
        <ul>
          <li>Birth Certificate</li>
          <li>Proof Of Residence</li>
          <li>Barangay Clearance</li>
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
        In order to get an ID online, log in to your online e-services account
        and visit the ID tab. Inside this tab will be a set of choices on which
        ID you wish to avail. Follow the instructions.
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
        In order to avail an ID offline:
        <ol>
          <li>Acquire an ID Services Form at the Office Helpdesk.</li>
          <li>Fill up the form and submit your requirements at Station 2a.</li>
          <li>Pay at the Banking Office and present receipt at Station 2b.</li>
          <li>Secure ID receipt and wait for a message regarding your ID.</li>
        </ol>
      </ui-text>
    </block-text>
  `,
  styleUrls: ['../services.component.scss'],
})
export class ServicesIDComponent {
  HeadingSize = HeadingSize;
  SplitColumnsPosition = SplitColumnsPosition;

  links = [
    { id: 'requirements', text: 'Requirements' },
    { id: 'online', text: 'Online' },
    { id: 'offline', text: 'Offline' },
  ];
}
