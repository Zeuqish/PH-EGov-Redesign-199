import { UIBlockComponent } from './ui-block/ui-block.component';
import { UIColumnsComponent } from './ui-columns/ui-columns.component';

import { NgModule } from '@angular/core';

@NgModule({
  declarations: [UIBlockComponent, UIColumnsComponent],
  exports: [UIBlockComponent, UIColumnsComponent],
})
export class UIModule {}
