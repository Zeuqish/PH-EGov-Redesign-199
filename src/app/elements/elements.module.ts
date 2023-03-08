import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { UIModule } from '../ui/ui.module';
import { ElementTableOfContentsComponent } from './element-table-of-contents/element-table-of-contents.component';
import { ElementCardComponent } from './element-card/element-card.component';
import { ElementCardSmallComponent } from './element-card-small/element-card-small.component';

@NgModule({
  imports: [CommonModule, BrowserModule, UIModule],
  declarations: [
    ElementTableOfContentsComponent,
    ElementCardComponent,
    ElementCardSmallComponent,
  ],
  exports: [
    ElementTableOfContentsComponent,
    ElementCardComponent,
    ElementCardSmallComponent,
  ],
})
export class ElementsModule {}
