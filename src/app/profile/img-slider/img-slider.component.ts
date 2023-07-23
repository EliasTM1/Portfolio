import { Component, OnInit } from '@angular/core';
import { slides, Slide } from './imgSliderMock';


@Component({
  selector: 'app-img-slider',
  templateUrl: './img-slider.component.html',
  styleUrls: ['./img-slider.component.scss']
})
export class ImgSliderComponent {

  slides : Slide[] =  slides
  activeSlideIndex: number = 0;
  someExample : any[] = [];

  ngOnInit() {
    this.slides[this.activeSlideIndex].active = true;
    this.someExample = [this.slides[this.activeSlideIndex]];
  }

  onClickButton(isRightButton: boolean) {
    this.slides[this.activeSlideIndex].active = false;

    if (isRightButton) {
      this.activeSlideIndex = (this.activeSlideIndex + 1) % this.slides.length;
    } else {
      this.activeSlideIndex = (this.activeSlideIndex - 1 + this.slides.length) % this.slides.length;
    }

    this.slides[this.activeSlideIndex].active = true;
    this.someExample = [this.slides[this.activeSlideIndex]];
  }
}
