import { Component, Input } from '@angular/core';
import { PageHeight, PageWidth } from '../typedefs';

@Component({
  selector: 'ui-page-layout',
  template: `
    <div class="page-layout" [style]="getPageWidthAndHeight()">
      <ng-content></ng-content>
    </div>
  `,
  styleUrls: ['./ui-page-layout.component.scss'],
})
export class UIPageLayoutComponent {
  @Input() pageHeight: number = PageHeight.FULL;
  @Input() pageWidth: number = PageWidth.LARGE;

  ngOnInit() {}

  getPageWidthAndHeight() {
    return `
  --page-width: ${this.pageWidth}px;
  --page-height: ${this.pageHeight}%;
  `;
  }
}
