import { Component, Input } from '@angular/core';

@Component({
  selector: 'ui-block',
  template: `
    <div class="block-wrapper">
      <div
        class="block-column-item"
        [style]="getColumnSpan()"
        style="grid-row:1;"
      >
        <ng-content></ng-content>
      </div>

      <div
        *ngIf="this.optionalGrid"
        class="block-column-item-optional"
        [style]="getOptionalColumnSpan()"
        style="grid-row:1;"
      >
        <ng-content select="[optional]"></ng-content>
      </div>
    </div>
  `,
  styleUrls: ['./ui-block.component.scss'],
})
export class UIBlockComponent {
  @Input() colStart: number = 3;
  @Input() colEnd: number = 11;

  @Input() optionalGrid: boolean = false;
  @Input() optionalColStart: number = 3;
  @Input() optionalColEnd: number = 11;

  @Input() PaddingTop: number = 16;
  @Input() PaddingBottom: number = 16;

  getColumnSpan() {
    return `--col-start: ${this.colStart}; --col-end: ${this.colEnd}; padding-top: ${this.PaddingTop}px; padding-bottom: ${this.PaddingBottom}px; `;
  }

  getOptionalColumnSpan() {
    return `--col-start-opt: ${this.optionalColStart}; --col-end-opt: ${this.optionalColEnd}`;
  }
}
