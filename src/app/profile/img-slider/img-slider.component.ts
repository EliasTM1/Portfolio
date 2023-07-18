import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-img-slider',
  templateUrl: './img-slider.component.html',
  styleUrls: ['./img-slider.component.scss']
})
export class ImgSliderComponent {
  slides: any[] = [
    { number: 1, imageUrl: '../../../assets/images/projects/authentication/safe.jpg', altText: 'The Woods' },
    { number: 2, imageUrl: '../../../assets/images/projects/authentication/whoAreYou.jpg', altText: 'Cinque Terre' },
    { number: 3, imageUrl: '../../../assets/images/projects/blog/typing.jpg', altText: 'Mountains and fjords' },
    { number: 4, imageUrl: '../../../assets/images/projects/blog/typing_v2.jpg', altText: 'Northern Lights' },
    { number: 5, imageUrl: '../../../assets/images/projects/authentication/safe.jpg', altText: 'Nature and sunrise' },
    { number: 6, imageUrl: '../../../assets/images/projects/authentication/safe.jpg', altText: 'Snowy Mountains' }
  ];

  slideIndex = 0;

  plusSlides(n: number) {
    this.slideIndex += n;
    this.adjustSlideIndex();
  }

  currentSlide(index: number) {
    this.slideIndex = index;
    this.adjustSlideIndex();
  }

  private adjustSlideIndex() {
    if (this.slideIndex >= this.slides.length) {
      this.slideIndex = 0;
    } else if (this.slideIndex < 0) {
      this.slideIndex = this.slides.length - 1;
    }
  }
}
