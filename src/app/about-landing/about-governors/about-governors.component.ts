import { Component } from '@angular/core';
import {
  FontWeight,
  HeadingSize,
  PaddingSize,
  SplitColumnsPosition,
} from '../../ui/typedefs';

@Component({
  selector: 'about-governors',
  templateUrl: './about-governors.component.html',
})
export class AboutGovernorsComponent {
  FontWeight = FontWeight;
  HeadingSize = HeadingSize;
  PaddingSize = PaddingSize;
  SplitColumnsPosition = SplitColumnsPosition;
}
