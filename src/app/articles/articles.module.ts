import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ArticleCovidComponent } from './article-covid/article-covid.component';
import { UIModule } from '../ui/ui.module';
import { BlockModule } from '../blocks/block.module';
import { ElementsModule } from '../elements/elements.module';
import { ArticlesComponent } from './articles.component';
import { ArticlePalaroComponent } from './article-palaro/article-palaro.component';
import { ArticleFarmComponent } from './article-farm/article-farm.component';
import { ArticleSolarComponent } from './article-solar/article-solar.component';

@NgModule({
  imports: [CommonModule, BrowserModule, UIModule, BlockModule, ElementsModule],
  declarations: [
    ArticlesComponent,
    ArticleCovidComponent,
    ArticlePalaroComponent,
    ArticleFarmComponent,
    ArticleSolarComponent,
  ],
})
export class ArticlesModule {}
