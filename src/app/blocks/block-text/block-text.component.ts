import { Component, Input } from '@angular/core';

@Component({
  selector: 'block-text',
  template: `
    <ui-block>
      <div *ngIf="true">
        <ui-columns-split-type>
          <ui-text>
            <ng-content></ng-content>
          </ui-text>
        </ui-columns-split-type>
      </div>
    </ui-block>
  `,
  styleUrls: ['./block-text.component.scss'],
})
export class BlockTextComponent {
  @Input() splitType: string = '';
}
