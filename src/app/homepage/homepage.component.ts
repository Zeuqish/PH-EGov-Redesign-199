import { Component } from '@angular/core';
import {
  FontWeight,
  TextSize,
  HeadingSize,
  PaddingSize,
  SplitColumnsNumber,
  SplitColumnsPosition,
  SplitColumnsSize,
  ImageShape,
} from '../ui/typedefs';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  //template: ``,
  styleUrls: ['./homepage.component.scss'],
})
export class HomepageComponent {
  FontWeight = FontWeight;
  HeadingSize = HeadingSize;
  PaddingSize = PaddingSize;
  SplitColumnsNumber = SplitColumnsNumber;
  SplitColumnsPosition = SplitColumnsPosition;
  SplitColumnsSize = SplitColumnsSize;
  ImageShape = ImageShape;
  TextSize = TextSize;

  articleContent = [
    {
      id: 0,
      title: 'Covid Update in Rizal Province',
      blurb: 'COVID-19 Update in Rizal Province July 31, 2022 (Sunday)',
      link: '/articles/covid',
      img: './assets/articles/article_covid.jpg',
    },
    {
      id: 1,
      title: '2023 Palarong Panlalawigan',
      blurb:
        'Masayang binuksan ni Gob. Nina Ricci Ynares ang 2023 Palarong Panlalawigan sa Rizal sa Rizal National Science Highschool',
      link: '/articles/palaro',
      img: './assets/articles/article_palaro.jpg',
    },
    {
      id: 2,
      title: 'Farm-to-Market Road Project Inilunsad',
      blurb:
        'Pinasinayaan ni Rizal Gob. Nina Ricci Ynares ang bagong tapos na Farm-to-Market Road Project sa Brgy. Cuyambay',
      link: '/articles/farm',
      img: './assets/articles/article_farm.jpg',
    },
    {
      id: 3,
      title: 'Eco-Friendly Solar Streetlights',
      blurb:
        'Installed at fully-functional na an gating mga Eco-Friendly Solar Streetlights sa bahagi ng Brgy. San Guillermo',
      link: '/articles/solar',
      img: './assets/articles/article_solar.jpg',
    },
  ];

  scroll(target: string) {
    let element = document.getElementById(target);
    console.log(element);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }
}
