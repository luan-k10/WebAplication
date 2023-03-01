import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  imageObject = [{
    image: '',
    thumbImage: '',
    alt: '',
    title: ''
  }];

  constructor() { }

  ngOnInit(): void {
    this.popularSlider();
  }

  popularSlider(){
    this.imageObject = [{
      image: 'assets/img/slider/ima1.jpg',
      thumbImage: '',
      alt: '',
      title: ''
    },
    {
      image: 'assets/img/slider/ima2.jpg',
      thumbImage: '',
      alt: '',
      title: ''
    },
    {
      image: 'assets/img/slider/ima3.jpg',
      thumbImage: '',
      alt: '',
      title: ''
    }]
  }
}
