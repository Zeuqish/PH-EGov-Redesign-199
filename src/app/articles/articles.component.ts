import { Component } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import {
  FontWeight,
  HeadingSize,
  PaddingSize,
  SplitColumnsNumber,
  SplitColumnsPosition,
  SplitColumnsSize,
  ImageShape,
} from '../ui/typedefs';

@Component({
  selector: 'app-articles-handler',
  template: `
    <div *ngIf="this.articleID == 'covid'">
      <article-covid></article-covid>
    </div>
    <div *ngIf="this.articleID == 'palaro'">
      <article-palaro></article-palaro>
    </div>
    <div *ngIf="this.articleID == 'farm'">
      <article-farm></article-farm>
    </div>
    <div *ngIf="this.articleID == 'solar'">
      <article-solar></article-solar>
    </div>
  `,
  styleUrls: ['./articles.component.scss'],
})
export class ArticlesComponent {
  FontWeight = FontWeight;
  HeadingSize = HeadingSize;
  PaddingSize = PaddingSize;
  SplitColumnsNumber = SplitColumnsNumber;
  SplitColumnsPosition = SplitColumnsPosition;
  SplitColumnsSize = SplitColumnsSize;
  ImageShape = ImageShape;

  articleID: string = '';

  constructor(private route: ActivatedRoute) {
    this.route.params.subscribe((params) => this.getArticle(params));
  }

  getArticle(articleID: Params) {
    this.articleID = articleID['ArticleID'];
  }
}
