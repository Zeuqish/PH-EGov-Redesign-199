import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { UIModule } from '../ui/ui.module';
import { BlockTextComponent } from './block-text/block-text.component';

@NgModule({
  imports: [CommonModule, BrowserModule, UIModule],
  declarations: [BlockTextComponent],
  exports: [BlockTextComponent],
})
export class BlockModule {}
