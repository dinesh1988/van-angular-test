import { Component } from '@angular/core';
import { Image } from './shared.ts';
@Component({
  selector: 'readme-page',
  templateUrl: './readme-page.component.html',
  styleUrls: ['./readme-page.component.scss']
})
export class ReadmePageComponent  {

  public images = IMAGES;
  constructor() {
  }
}

const IMAGES: Image[] = [
  { 'title': 'Carousel slide nr 1', 'url': 'assets/images/angularfirebase.png' },
  { 'title': 'Carousel slide nr 2', 'url': '/assets/images/angularfirebase.png' },
  { 'title': 'Carousel slide nr 3', 'url': '/assets/images/angularfirebase.png' },
  { 'title': 'Carousel slide nr 4', 'url': '/assets/images/angularfirebase.png' },
  { 'title': 'Carousel slide nr 5', 'url': '/assets/images/angularfirebase.png' },
];
