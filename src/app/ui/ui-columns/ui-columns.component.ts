import { Component, Input } from '@angular/core';

@Component({
  selector: 'ui-columns',
  template: `
    <div class="column-wrapper">
      <div class="column-padder"><ng-content></ng-content></div>
    </div>
  `,
  styleUrls: ['./ui-columns.component.scss'],
})
export class UIColumnsComponent {
  @Input() label: string = '';
}
