import { AfterViewInit, Component, Input } from '@angular/core';
import {
  HeadingSize,
  PaddingSize,
  ImageShape,
  SplitColumnsSize,
  TextSize,
} from 'src/app/ui/typedefs';
@Component({
  selector: 'block-slideshow',
  template: `
    <ui-block [optionalGrid]="true" [colStart]="3" [colEnd]="11">
      <ui-container class="carousel-container">
        <ui-container
          *ngFor="let slide of slides; index as i"
          class="carousel-content-container no-display"
        >
          <!--BAD DESIGN, MUST FIX WITH A PROPER UI-CONTAINER -->
          <ui-container [paddingTop]="PaddingSize.LARGE">
            <div class="carousel-content fade">
              <a class="prev" (click)="this.slideControls(-1)"> &#10094; </a>
              <ui-image
                class="carousel-image"
                [imageSrc]="slide.src"
              ></ui-image>
              <a class="next" (click)="this.slideControls(1)"> &#10095; </a>
            </div>
          </ui-container>
          <ui-text [textSize]="TextSize.XSMALL" class="center-text">
            {{ i + 1 }} of {{ slides.length }}
          </ui-text>
          <ui-container
            [paddingTop]="PaddingSize.SMALL"
            [paddingLeft]="PaddingSize.XXLARGE"
            [paddingBottom]="PaddingSize.LARGE"
          >
            <ui-heading
              class="carousel-title"
              [headingSize]="HeadingSize.HEADING_FIVE"
              >{{ slide.title }}
            </ui-heading>
            <ui-text class="carousel-caption">{{ slide.caption }} </ui-text>
          </ui-container>
        </ui-container>
      </ui-container>
    </ui-block>
  `,
  styleUrls: ['./block-slideshow.component.scss'],
})
export class BlockSlideshowComponent implements AfterViewInit {
  @Input() slideData: string[] = [];
  HeadingSize = HeadingSize;
  ImageShape = ImageShape;
  PaddingSize = PaddingSize;
  SplitColumnsSize = SplitColumnsSize;
  TextSize = TextSize;
  //<ui-image class="slide-image" [imageSrc]="slide.src"></ui-image>
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
    let getSlides = document.getElementsByClassName(
      'carousel-content-container'
    );
    console.log(getSlides);
    if (this.slideIndex >= this.slides.length) {
      this.slideIndex = 0;
    } else if (this.slideIndex < 0) {
      this.slideIndex = this.slides.length - 1;
    }

    for (let i = 0; i < getSlides.length; i++) {
      getSlides[i].classList.add('no-display');
      getSlides[i].classList.remove('active');
    }

    return getSlides[this.slideIndex].classList.replace('no-display', 'active');
  }

  ngAfterViewInit(): void {
    let getSlides = document.getElementsByClassName(
      'carousel-content-container'
    );
    getSlides[0].classList.replace('no-display', 'active');
  }
}
