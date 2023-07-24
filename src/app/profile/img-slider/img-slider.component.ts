import { Component, Input, OnInit } from '@angular/core';
import { Slide } from './imgSliderMock';

@Component({
  selector: 'app-img-slider',
  templateUrl: './img-slider.component.html',
  styleUrls: ['./img-slider.component.scss'],
})
export class ImgSliderComponent {
  @Input() projectData : any;
  activeSlideIndex: number = 0;
  activeSlide: any[] = [];
  slides: Slide[] = []

  ngOnInit() {
    this.slides = this.projectData;
    this.slides[this.activeSlideIndex].active = false;
    this.activeSlide = [this.slides[this.activeSlideIndex]];
  }

  onClickButton(isRightButton: boolean) {
    this.activeSlide[0].active = false;
    if (isRightButton) {
      this.activeSlideIndex = (this.activeSlideIndex + 1) % this.slides.length;
    } else {
      this.activeSlideIndex =
        (this.activeSlideIndex - 1 + this.slides.length) % this.slides.length;
    }

    this.slides[this.activeSlideIndex].active = true;
    this.activeSlide = [this.slides[this.activeSlideIndex]];
    setTimeout(() => {
      this.activeSlide[0].active = false;
    }, 100);
  }
}
