import { UIBlockComponent } from './ui-block/ui-block.component';
import { UIColumnsComponent } from './ui-columns/ui-columns.component';
import { UIPageLayoutComponent } from './ui-page-layout/ui-page-layout.component';

import { NgModule } from '@angular/core';

@NgModule({
  declarations: [UIBlockComponent, UIColumnsComponent, UIPageLayoutComponent],
  exports: [UIBlockComponent, UIColumnsComponent, UIPageLayoutComponent],
})
export class UIModule {}
