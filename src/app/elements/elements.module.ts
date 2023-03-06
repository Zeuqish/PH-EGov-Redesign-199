import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { UIModule } from '../ui/ui.module';
import { ElementTableOfContentsComponent } from './element-table-of-contents/element-table-of-contents.component';
import { ElementCardComponent } from './element-card/element-card.component';

@NgModule({
  imports: [CommonModule, BrowserModule, UIModule],
  declarations: [ElementTableOfContentsComponent, ElementCardComponent],
  exports: [ElementTableOfContentsComponent, ElementCardComponent],
})
export class ElementsModule {}
