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
  selector: 'app-services-landing',
  template: ` <router-outlet></router-outlet>`,
  styleUrls: ['./services.component.scss'],
})
export class ServicesLandingComponent {
  HeadingSize = HeadingSize;
}
