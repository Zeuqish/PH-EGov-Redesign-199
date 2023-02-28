import { Component, Input } from '@angular/core';

@Component({
  selector: 'ui-block',
  template: `
    <div class="block-wrapper">
      <div class="block-column-item">
        <ng-content></ng-content>
      </div>
    </div>
  `,
  styleUrls: ['./ui-block.component.scss'],
})
export class UIBlockComponent {
  @Input() label: string = '';
}
