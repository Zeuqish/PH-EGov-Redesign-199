import { UIBlockComponent } from './ui-block/ui-block.component';
import { UIColumnsComponent } from './ui-columns/ui-columns.component';
import { UIPageLayoutComponent } from './ui-page-layout/ui-page-layout.component';
import { UITextComponent } from './ui-text/ui-text.component';
import { UIHeadingComponent } from './ui-heading/ui-heading.component';

import { NgModule } from '@angular/core';

@NgModule({
  declarations: [
    UIBlockComponent,
    UIColumnsComponent,
    UIPageLayoutComponent,
    UITextComponent,
    UIHeadingComponent,
  ],
  exports: [
    UIBlockComponent,
    UIColumnsComponent,
    UIPageLayoutComponent,
    UITextComponent,
    UIHeadingComponent,
  ],
})
export class UIModule {}
