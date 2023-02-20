import { Component, Input } from '@angular/core';

@Component({
  selector: 'ui-block',
  template: `
    <div class="block-wrapper">
      <div class="block-padder"><ng-content></ng-content></div>
    </div>
  `,
  styleUrls: ['./block.component.scss'],
})
export class BlockComponent {
  @Input() label: string = '';
}
