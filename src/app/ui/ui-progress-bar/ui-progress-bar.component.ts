import { Component, Input, ViewEncapsulation} from '@angular/core';

@Component({
  selector: 'ui-progress-bar',
  template: `
    <div class="bar">
      <div class="gray-bar">
        <div class="colored-bar" [style] = "getProgressDetails()"></div>
      </div>
    </div>
  `,
  styleUrls: ['./ui-progress-bar.component.scss'],
})
export class UIProgressBarComponent {
  @Input() progressPercent: number = 0;

  getProgressDetails(){
    return `
      width:${this.progressPercent}%
    `;
  }
}
