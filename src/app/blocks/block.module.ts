import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { UIModule } from '../ui/ui.module';
import { BlockTextComponent } from './block-text/block-text.component';
import { BlockBannerComponent } from './block-banner/block-banner.component';
import { ElementsModule } from '../elements/elements.module';

@NgModule({
  imports: [CommonModule, BrowserModule, UIModule, ElementsModule],
  declarations: [BlockTextComponent, BlockBannerComponent],
  exports: [BlockTextComponent, BlockBannerComponent],
})
export class BlockModule {}
