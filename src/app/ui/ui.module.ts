import { UIBlockComponent } from './ui-block/ui-block.component';
import { UIColumnsComponent } from './ui-columns/ui-columns.component';
import { UIPageLayoutComponent } from './ui-page-layout/ui-page-layout.component';
import { UITextComponent } from './ui-text/ui-text.component';
import { UIHeadingComponent } from './ui-heading/ui-heading.component';
import { UIContainerComponent } from './ui-container/ui-container.component';
import { UIColumnsSplitComponent } from './ui-columns-split-type/ui-columns-split-type.component';
import { UIColumnsThreeSplitComponent } from './ui-columns-three-split-type/ui-columns-three-split-type.component';
import { UIInputComponent } from './ui-input/ui-input.component';
import { UIButtonComponent } from './ui-button/ui-button.component';


import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { UIImageComponent } from './ui-image/ui-image.component';

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
    UIColumnsThreeSplitComponent,
    UIImageComponent,
  ],
  exports: [
    UIBlockComponent,
    UIColumnsComponent,
    UIPageLayoutComponent,
    UITextComponent,
    UIHeadingComponent,
    UIContainerComponent,
    UIColumnsSplitComponent,
    UIColumnsThreeSplitComponent,
    UIImageComponent,
  ],
})
export class UIModule {}
