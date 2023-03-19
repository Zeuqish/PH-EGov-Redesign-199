import { Component } from '@angular/core';
import {
  FontWeight,
  HeadingSize,
  PaddingSize,
  SplitColumnsNumber,
  SplitColumnsPosition,
  SplitColumnsSize,
  ImageShape,
} from '../../ui/typedefs';

@Component({
  selector: 'article-covid',
  templateUrl: './article_covid.component.html',
  //template: ``,
  styleUrls: ['./article_covid.component.scss'],
})
export class ArticleCovidComponent {
  FontWeight = FontWeight;
  HeadingSize = HeadingSize;
  PaddingSize = PaddingSize;
  SplitColumnsNumber = SplitColumnsNumber;
  SplitColumnsPosition = SplitColumnsPosition;
  SplitColumnsSize = SplitColumnsSize;
  ImageShape = ImageShape;
}
