import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ArticleCovidComponent } from '../articles/article-covid/article-covid.component';
import { ArticleFarmComponent } from './article-farm/article-farm.component';
import { ArticlePalaroComponent } from './article-palaro/article-palaro.component';
import { ArticleSolarComponent } from './article-solar/article-solar.component';
import { ArticlesComponent } from './articles.component';

const routes: Routes = [
  {
    path: 'articles',
    component: ArticlesComponent,
    children: [
      {
        path: 'covid',
        component: ArticleCovidComponent,
      },
      {
        path: 'solar',
        component: ArticleSolarComponent,
      },
      {
        path: 'farm',
        component: ArticleFarmComponent,
      },
      {
        path: 'palaro',
        component: ArticlePalaroComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class ArticlesRoutingModule {}
