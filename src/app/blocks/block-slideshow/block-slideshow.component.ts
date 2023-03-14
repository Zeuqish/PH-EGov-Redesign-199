import {
  AfterContentInit,
  AfterViewInit,
  Component,
  Input,
  OnInit,
} from '@angular/core';
import {
  HeadingSize,
  PaddingSize,
  ImageShape,
  SplitColumnsSize,
} from 'src/app/ui/typedefs';
@Component({
  selector: 'block-slideshow',
  template: `
    <ui-block [optionalGrid]="true">
      <ui-columns class="slideshow-container">
        <ui-container>
          <ui-container
            class="slide fade no-display"
            *ngFor="let slide of slides; index as i"
          >
            <ui-text class="slide-number">
              {{ i + 1 }}/{{ slides.length }}
            </ui-text>
            <ui-text class="slide-title">{{ slide.title }}</ui-text>
            <ui-image
              optional
              class="slide-image"
              [imageSrc]="slide.src"
            ></ui-image>
            <ui-text class="slide-caption">{{ slide.caption }}</ui-text>

            <a class="prev" (click)="this.slideControls(-1)">&#10094;</a>
            <a class="next" (click)="this.slideControls(1)">&#10095;</a>
          </ui-container>
        </ui-container>
      </ui-columns>
    </ui-block>
  `,
  styleUrls: ['./block-slideshow.component.scss'],
})
export class BlockSlideshowComponent implements AfterViewInit {
  HeadingSize = HeadingSize;
  ImageShape = ImageShape;
  PaddingSize = PaddingSize;
  SplitColumnsSize = SplitColumnsSize;

  slides = [
    { title: 'Cat 1', caption: 'Caption 1', src: './assets/slideshow1.jpg' },
    { title: 'Cat 2', caption: 'Caption 2', src: './assets/slideshow2.jpg' },
    { title: 'Cat 3', caption: 'Caption 3', src: './assets/slideshow3.jpg' },
    { title: 'Cat 4', caption: 'Caption 4', src: './assets/slideshow4.jpg' },
  ];

  slideControls(num: number) {
    this.slideIndex += num;
    console.log(this.slideIndex);
    this.showSlides(this.slideIndex);
  }

  slideIndex: number = 0;

  showSlides(num: number): boolean {
    let getSlides = document.getElementsByClassName('slide');
    console.log(getSlides);
    if (this.slideIndex >= this.slides.length) {
      this.slideIndex = 0;
    } else if (this.slideIndex < 0) {
      this.slideIndex = this.slides.length - 1;
    }

    for (let i = 0; i < getSlides.length; i++) {
      getSlides[i].classList.add('no-display');
      getSlides[i].classList.remove('display-slide');
    }
    return getSlides[this.slideIndex].classList.replace(
      'no-display',
      'display-slide'
    );
  }

  ngAfterViewInit(): void {
    let getSlides = document.getElementsByClassName('slide');
    console.log(getSlides);
    getSlides[0].classList.replace('no-display', 'display-slide');
  }
}
