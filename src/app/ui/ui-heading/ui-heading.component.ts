import { Component, Input } from '@angular/core';

@Component({
  selector: 'ui-heading',
  template: `
    <div class="block-wrapper">
      <div class="text-wrapper">
        <ng-content></ng-content>
      </div>
    </div>
  `,
  styleUrls: ['./ui-heading.component.scss'],
})
export class BlockComponent {
  @Input() label: string = '';
}
