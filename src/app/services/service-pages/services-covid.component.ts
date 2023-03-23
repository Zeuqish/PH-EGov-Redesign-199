import { Component } from '@angular/core';
import { HeadingSize, SplitColumnsPosition } from 'src/app/ui/typedefs';

@Component({
  selector: 'services-covid',
  template: `
    <div class="background">
      <block-banner>
        <ui-heading class="welcome">
          <div class="welcome">How To Get Free COVID Assistance</div>
        </ui-heading>
        <ui-button> Visit E-Service </ui-button>

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
      <ui-heading [headingSize]="HeadingSize.HEADING_FIVE">
        Warning: This Page is only meant to showcase how local e-services could
        look. This page ONLY CONTAINS PLACEHOLDER text, and all contents here
        SHOULD NOT be used when applying for local government services.
      </ui-heading>
    </ui-block>

    <ui-block>
      <ui-heading> How to Apply for Free COVID Assistance</ui-heading>
    </ui-block>
    <ui-block id="requirements">
      <ui-heading [headingSize]="HeadingSize.HEADING_FOUR">
        Requirements
      </ui-heading>
      <hr />
      <ui-text>
        The Free COVID Assistance program allows individuals to request for
        COVID-related services, such as vaccinations and admission to a COVID
        Facility.
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
        In order to avail of the COVID Assistance, log in to your online
        e-services account and visit the COVID tab. Inside this tab will be a
        set of instructions on how to safely avail of the COVID Assistance
        program.
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
        Due to safety protocols, there is no offline and onsite method of
        availing the Free COVID Assistance. Instead, please contact the helpdesk
        on how to avail the Assistance.
      </ui-text>
    </block-text>
  `,
  styleUrls: ['../services.component.scss'],
})
export class ServicesCovidComponent {
  HeadingSize = HeadingSize;
  SplitColumnsPosition = SplitColumnsPosition;

  links = [
    { id: 'requirements', text: 'Requirements' },
    { id: 'online', text: 'Online' },
    { id: 'offline', text: 'Offline' },
  ];
}
