import { Component } from '@angular/core';
import {
  FontWeight,
  HeadingSize,
  PaddingSize,
  SplitColumnsPosition,
  SplitColumnsSize,
} from '../../ui/typedefs';

@Component({
  selector: 'article-palaro',
  templateUrl: './article-palaro.component.html',
  styleUrls: ['../articles.component.scss'],
})
export class ArticlePalaroComponent {
  FontWeight = FontWeight;
  HeadingSize = HeadingSize;
  PaddingSize = PaddingSize;
  SplitColumnsPosition = SplitColumnsPosition;
}
