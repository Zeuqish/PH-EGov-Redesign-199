import { Component, ViewEncapsulation} from '@angular/core';

@Component({
  selector: 'ui-step-progress-bar',
  template: `
    <div class="container">
        <span *ngFor="let item of status;let i = index">
          <span class="circle-desc" [class.circle-desc-active]="currentStatus == item">{{ item }}</span>
          <span *ngIf="completedStatus.indexOf(item)!=-1; else incompleteStatus" >
              <span class="circles" [class.completed]="true">{{i+1}}</span>
              <span class="bar" *ngIf="(i != status.length-1)"></span>
          </span>
          <ng-template #incompleteStatus>
            <span class="circles" [class.active]="currentStatus == item">{{i+1}}</span>
            <span class="bar" *ngIf="(i != status.length-1)"></span>
          </ng-template>
        </span>
      </div>
  `,
  styleUrls: ['./ui-step-progress-bar.component.scss'],
  encapsulation:ViewEncapsulation.ShadowDom
})
export class UIStepProgressBarComponent {
  name = 'Step Progress Bar';

  status = ["Phase 1", "Phase 2", "Phase 3", "Phase 4"];
  completedStatus = ["Phase 1","Phase 2",]
  currentStatus = "Phase 3"
}
