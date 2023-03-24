import { Component } from '@angular/core';
import {
  FontWeight,
  HeadingSize,
  PaddingSize,
  SplitColumnsPosition,
} from '../../ui/typedefs';

@Component({
  selector: 'article-farm',
  templateUrl: './article-farm.component.html',
  styleUrls: ['../articles.component.scss'],
})
export class ArticleFarmComponent {
  FontWeight = FontWeight;
  HeadingSize = HeadingSize;
  PaddingSize = PaddingSize;
  SplitColumnsPosition = SplitColumnsPosition;
}
