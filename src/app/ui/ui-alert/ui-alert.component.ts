import { Component, Input} from '@angular/core';
import { AlertType } from '../typedefs';


@Component({
  // Should be used with span to handle multiple ng-content

  // <ui-alert [type]="AlertType.SUCCESS"> <span slot="start">Changes has been saved successfully!</span>

  selector: 'ui-alert',
  template: `
  <div class='content'>
    <div *ngIf="type=='success'" class="alert alert-success alert-white rounded">
        <button type="button" class="close" data-dismiss="alert" aria-hidden="true">×</button>
        <div class="icon"><i class="fa fa-check"></i></div>
        <strong>Success! </strong> <ng-content select="[slot=start]"></ng-content>
    </div>
    <div *ngIf="type=='info'" class="alert alert-info alert-white rounded">
        <button type="button" class="close" data-dismiss="alert" aria-hidden="true">×</button>
        <div class="icon"><i class="fa fa-info-circle"></i></div>
        <strong>Info! </strong> <ng-content select="[slot=info]"></ng-content>
    </div>
    <div *ngIf="type=='alert'" class="alert alert-warning alert-white rounded">
        <button type="button" class="close" data-dismiss="alert" aria-hidden="true">×</button>
        <div class="icon"><i class="fa fa-warning"></i></div>
        <strong>Alert! </strong> <ng-content select="[slot=alert]"></ng-content>
    </div>
    <div *ngIf="type=='error'" class="alert alert-danger alert-white rounded">
        <button type="button" class="close" data-dismiss="alert" aria-hidden="true">×</button>
        <div class="icon"><i class="fa fa-times-circle"></i></div>
        <strong>Error! </strong> <ng-content select="[slot=error]"></ng-content>
    </div>
  </div>
  `,
  styleUrls: ['./ui-alert.component.scss'],
})
export class UIAlertComponent {
  @Input() type: AlertType = AlertType.SUCCESS;
}

