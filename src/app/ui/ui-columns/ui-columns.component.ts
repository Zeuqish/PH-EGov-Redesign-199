import { Component, Input, OnInit } from '@angular/core';
import { NgIf } from '@angular/common';

@Component({
  selector: 'ui-columns',
  template: `
    <div class="columns-autofit-wrapper">
      <ng-content></ng-content>
    </div>
  `,
  styleUrls: ['./ui-columns.component.scss'],
})
export class UIColumnsComponent implements OnInit {
  ngOnInit() {}
}
