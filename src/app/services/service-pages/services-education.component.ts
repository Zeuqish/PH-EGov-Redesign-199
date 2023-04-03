import { Component } from '@angular/core';
import { HeadingSize, SplitColumnsPosition } from 'src/app/ui/typedefs';

@Component({
  selector: 'services-education',
  template: `
    <div class="background">
      <block-banner>
        <ui-heading>
          <div class="welcome">How To Apply For YNARES Youth Scholarship</div>
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
      <ui-heading> YNARES Youth Scholarship</ui-heading>
    </ui-block>
    <ui-block id="requirements">
      <ui-heading [headingSize]="HeadingSize.HEADING_FOUR">
        Requirements
      </ui-heading>
      <hr />
      <ui-text>
        The Ynares Youth is both a merit and need-based scholarship accorded to
        young Rizaleño students, who despite poverty and adversity have mustered
        the will to continue their education by doing odd jobs or informal means
        to support their studies at the same time help their families. The
        beneficiary is selected, nominated and chosen on the basis of the
        following criteria:
        <ul>
          <li>
            The student-nominee should be a graduating senior high school
            student from any public senior high schools in DepEd-Division of
            Rizal;
          </li>
          <li>
            The student-nominee should be a resident of the Province of Rizal
            for at least three (3) years prior to nomination;
          </li>
          <li>
            The student-nominee should come from an economically-challenged
            family with no regular income;
          </li>
          <li>
            The student-nominee is doing odd jobs or informal means to support
            his/her schooling or his/her family;
          </li>
          <li>The student-nominee should possess good moral character; and</li>
          <li>The student-nominee should have no failing grade/s.</li>
        </ul>
      </ui-text>
      <ui-heading [headingSize]="HeadingSize.HEADING_FIVE">
        Additional Requirements
      </ui-heading>
      <ui-text>
        Additionally, in applying for the scholarship, the student must present
        the following:

        <ul>
          <li>Form 137</li>
          <li>School ID</li>
          <li>Family Income Tax Report</li>
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
        In order to apply online, visit the e-service form using the button
        above, and log-in with your e-service account. Follow the prompts to
        submit your requirements and for further details.
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
        In order to submit your scholarship offline:
        <ol>
          <li>Acquire a Scholarship Form at the Office Helpdesk.</li>
          <li>Fill up the form and submit your requirements at Station 4.</li>
          <li>Wait for an interview at Station 5.</li>
          <li>
            Secure the Scholarship Application Request Form and wait for a
            message regarding your scholarship status.
          </li>
        </ol>
      </ui-text>
    </block-text>
  `,
  styleUrls: ['../services.component.scss'],
})
export class ServicesEducationComponent {
  HeadingSize = HeadingSize;
  SplitColumnsPosition = SplitColumnsPosition;

  links = [
    { id: 'requirements', text: 'Requirements' },
    { id: 'online', text: 'Online' },
    { id: 'offline', text: 'Offline' },
  ];
}
