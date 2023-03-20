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
import { UINavBarComponent } from './ui-nav-bar/ui-nav-bar.component';
import { UIAlertComponent } from './ui-alert/ui-alert.component';
import { UITooltipComponent } from './ui-tooltip/ui-tooltip.component';
import { UIIframeComponent } from './ui-iframe/ui-iframe.component';
import { UIHighlightComponent } from './ui-highlight/ui-highlight.component';
import { UIClockComponent } from './ui-clock/ui-clock.component';

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { UILinkComponent } from './ui-link/ui-link.component';
import { UIHrComponent } from './ui-hr/ui-hr.component';
import { UIIconComponent } from './ui-icon/ui-icon.component';
import { RouterModule } from '@angular/router';
import { UIScrollableLinkComponent } from './ui-scrollable-link/ui-scrollable-link.component';
@NgModule({
  imports: [CommonModule, BrowserModule, RouterModule],
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
    UINavBarComponent,
    UIAlertComponent,
    UITooltipComponent,
    UIIconComponent,
    UIIframeComponent,
    UIHighlightComponent,
    UIClockComponent,
    UIScrollableLinkComponent,
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
    UINavBarComponent,
    UIAlertComponent,
    UITooltipComponent,
    UIIconComponent,
    UIIframeComponent,
    UIHighlightComponent,
    UIClockComponent,
    UIScrollableLinkComponent,
  ],
})
export class UIModule {}
