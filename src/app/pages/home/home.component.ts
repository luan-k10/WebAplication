import { Component, OnInit } from '@angular/core';
import { Slide } from 'src/app/shared/models/slide';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  slides: Slide[] = []

  constructor() { }

  ngOnInit(): void {
    this.slides.push({
      id: 0,
      src: 'assets/img/slider/ima1.jpg ',
      title: 'First slide',
      subtitle: 'Nulla vitae elit libero, a pharetra augue mollis interdum.'
    });
    this.slides.push({
      id: 1,
      src: 'assets/img/slider/ima2.jpg ',
      title: 'Second slide',
      subtitle: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
    });
    this.slides.push({
      id: 2,
      src: ' assets/img/slider/ima3.jpg ',
      title: 'Third slide',
      subtitle: 'Praesent commodo cursus magna, vel scelerisque nisl consectetur.'
    });
  }








  /*imageObject = [{
    image: '',
    thumbImage: '',
    alt: '',
    title: ''
  }];*/

 /* ngOnInit(): void {
    this.popularSlider();
  }

  popularSlider(){
    this.imageObject = [{
      image: 'assets/img/slider/ima1.jpg',
      thumbImage: 'assets/img/slider/ima1.jpg',
      alt: 'imagem 1',
      title: 'imagem 1'
    },
    {
      image: 'assets/img/slider/ima2.jpg',
      thumbImage: 'assets/img/slider/ima2.jpg',
      alt: 'imagem 2',
      title: 'imagem 2'
    },
    {
      image: 'assets/img/slider/ima3.jpg',
      thumbImage: 'assets/img/slider/ima3.jpg',
      alt: 'imagem 3',
      title: 'imagem 3'
    }]
  }*/
}
