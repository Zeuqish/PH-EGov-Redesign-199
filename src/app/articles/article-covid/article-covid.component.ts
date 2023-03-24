import { Component } from '@angular/core';
import {
  FontWeight,
  HeadingSize,
  PaddingSize,
  SplitColumnsPosition,
} from '../../ui/typedefs';

@Component({
  selector: 'article-covid',
  templateUrl: './article-covid.component.html',
  styleUrls: ['./article-covid.component.scss', '../articles.component.scss'],
})
export class ArticleCovidComponent {
  FontWeight = FontWeight;
  HeadingSize = HeadingSize;
  PaddingSize = PaddingSize;
  SplitColumnsPosition = SplitColumnsPosition;
}
