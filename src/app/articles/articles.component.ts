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
  template: ` <router-outlet></router-outlet> `,
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
