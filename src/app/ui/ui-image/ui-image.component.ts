import { Component, Input } from '@angular/core';
import { ImageShape } from '../typedefs';

@Component({
  selector: 'ui-image',
  template: `
    <img
      class="img-wrapper"
      [src]="this.imageSrc"
      [alt]="this.altText"
      [style]="shapeImage()"
    />
  `,
  styleUrls: ['./ui-image.component.scss'],
})
export class UIImageComponent {
  @Input() imageShape: ImageShape = ImageShape.SQUARE;
  @Input() imageSrc: string = '';
  @Input() altText: string = '';
  @Input() circleDiameter: Number = 100;

  shapeImage() {
    if (this.imageShape == ImageShape.CIRCLE) {
      return `object-fit: cover;
      border-radius: 50%;
      height: ${this.circleDiameter}px;
      width: ${this.circleDiameter}px;`;
    } else {
      return ``;
    }
  }
}
