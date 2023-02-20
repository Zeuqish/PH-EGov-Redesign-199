import { Component, Input } from '@angular/core';

@Component({
  selector: 'ui-block',
  template: `<div></div>`,
  styleUrls: ['./block.component.scss'],
})
export class BlockComponent {
  @Input() label: string = '';
}
