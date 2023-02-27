import { UIBlockComponent } from './ui-block/ui-block.component';
import { UIColumnsComponent } from './ui-columns/ui-columns.component';
import { UIPageLayoutComponent } from './ui-page-layout/ui-page-layout.component';
import { UITextComponent } from './ui-text/ui-text.component';
import { UIHeadingComponent } from './ui-heading/ui-heading.component';
import { UIContainerComponent } from './ui-container/ui-container.component';
import { UIColumnsSplitComponent } from './ui-columns-split-type/ui-columns-split-type.component';

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';

@NgModule({
  imports: [CommonModule, BrowserModule],
  declarations: [
    UIBlockComponent,
    UIColumnsComponent,
    UIPageLayoutComponent,
    UITextComponent,
    UIHeadingComponent,
    UIContainerComponent,
    UIColumnsSplitComponent,
  ],
  exports: [
    UIBlockComponent,
    UIColumnsComponent,
    UIPageLayoutComponent,
    UITextComponent,
    UIHeadingComponent,
    UIContainerComponent,
    UIColumnsSplitComponent,
  ],
})
export class UIModule {}
