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

  governor_data = [
    {
      name: 'Hon. Rebecca A. Ynares',
      service_length: '2001-2004 / 2013 - Present',
      img: './assets/officials/gov_ynares.jpg',
    },
    {
      name: 'Hon. Casimiro A. Ynares III, M.D.',
      service_length: '2007 - 2013',
      img: './assets/officials/gov_casimiro_iii.jpg',
    },
    {
      name: 'Hon. Casimiro M. Ynares, Jr.',
      service_length: '1992 - 2001 / 2004 - 2007',
      img: './assets/officials/gov_casimiro_jr.jpg',
    },
    {
      name: 'Hon. Reynaldo R. San Juan, M.D.',
      service_length: '1988 - 1992',
      img: './assets/officials/gov_san_juan.jpg',
    },
    {
      name: 'Hon. Benjamin Esguerra , Sr. and Hon. Isidro Inarda*',
      service_length: '(1986-1987)  and (1987-1988)',
      img: '',
    },
    {
      name: 'Hon. Isidro S. Rodriguez',
      service_length: '1955 - 1986',
      img: './assets/officials/gov_rodriguez.jpg',
    },
    {
      name: 'Hon. Wenceslao A. Pascual',
      service_length: '1952 - 1955',
      img: './assets/officials/gov_pascual.jpg',
    },
    {
      name: 'Hon. Sixto Antonio',
      service_length: '1947 - 1952',
      img: './assets/officials/gov_antonio.jpg',
    },
  ];
}
