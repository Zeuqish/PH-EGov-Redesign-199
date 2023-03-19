import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ArticleCovidComponent } from './article_covid/article_covid.component';
import { UIModule } from '../ui/ui.module';
import { BlockModule } from '../blocks/block.module';
import { ElementsModule } from '../elements/elements.module';
import { ArticlesComponent } from './articles.component';

@NgModule({
  imports: [CommonModule, BrowserModule, UIModule, BlockModule, ElementsModule],
  declarations: [ArticleCovidComponent],
  exports: [ArticleCovidComponent],
})
export class ArticlesModule {}
