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
import { UIImageComponent } from './ui-image/ui-image.component';
import { UIStepProgressBarComponent } from './ui-step-progress-bar/ui-step-progress-bar.component';
import { UIProgressBarComponent } from './ui-progress-bar/ui-progress-bar.component';
import { UIFormComponent } from './ui-form/ui-form.component';

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { UILinkComponent } from './ui-link/ui-link.component';
import { UIHrComponent } from './ui-hr/ui-hr.component';

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
    UILinkComponent,
    UIInputComponent,
    UIButtonComponent,
    UIStepProgressBarComponent,
    UIProgressBarComponent,
    UIFormComponent,
    UIHrComponent,
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
    UILinkComponent,
    UIInputComponent,
    UIButtonComponent,
    UIStepProgressBarComponent,
    UIProgressBarComponent,
    UIFormComponent,
    UIHrComponent,
  ],
})
export class UIModule {}
