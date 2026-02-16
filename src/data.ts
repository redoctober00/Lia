import type { CarouselImage } from './types';
import art1 from './assets/art1.jpg';
import art2 from './assets/art2.jpg';
import art3 from './assets/art3.jpg';
import art4 from './assets/art4.jpg';
import art5 from './assets/art5.jpg';
import art6 from './assets/art6.jpg';
import overcooked from './assets/overcooked.mp4';
import repo1 from './assets/repo1.mp4';
import repo2 from './assets/repo2.mp4';
import repo3 from './assets/repo3.mp4';

import img1 from './assets/233.jpg';
import img2 from './assets/333.jpg';
import img3 from './assets/1233.jpg';
import img4 from './assets/1234.jpg';
import img5 from './assets/12345.jpg';
import img6 from './assets/12343.jpg';



export const CAROUSEL_IMAGES: CarouselImage[] = [
  {
    src: overcooked,
    caption: 'namatay pa',
    isVideo: true,
  },
  {
    src: repo1,
    caption: 'abangan mo yung ano',
    isVideo: true,
  },
 
   {
    src: repo3,
    caption: 'hwadhahdaha antanga',
    isVideo: true,
  },
   {
    src: repo2,
    caption: 'naglalag kaze ako ate,,,',
    isVideo: true,
  },

];

export const GALLERY_IMAGES: CarouselImage[] = [
  {
    src: art1,
    caption: '',
  },
  {
    src: art2,
    caption: '',
  },
  {
    src: art3,
    caption: '',
  },
  {
    src: art4,
    caption: '',
  },
  {
    src: art5,
    caption: '',
  },
  {
    src: art6,
    caption: '',
  },

];

export const MENU_ITEMS = [
  {
    image: img1,
    link: '#',
  },
  {
    image: img2,
    link: '#',
  },
  {
    image: img3,
    link: '#',
  },
  {
    image: img4,
    link: '#',
  },
  {
    image: img5,
    link: '#',
  },
  {
    image: img6,
    link: '#',
  },
   
 
];

