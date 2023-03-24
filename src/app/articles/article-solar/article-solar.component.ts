import { Component } from '@angular/core';
import {
  FontWeight,
  HeadingSize,
  PaddingSize,
  SplitColumnsPosition,
} from '../../ui/typedefs';

@Component({
  selector: 'article-solar',
  templateUrl: './article-solar.component.html',
  styleUrls: ['../articles.component.scss'],
})
export class ArticleSolarComponent {
  FontWeight = FontWeight;
  HeadingSize = HeadingSize;
  PaddingSize = PaddingSize;
  SplitColumnsPosition = SplitColumnsPosition;
}
