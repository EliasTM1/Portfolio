import { Component, OnInit, HostListener } from '@angular/core';
// import { animate, AUTO_STYLE, state, style, transition, trigger } from '@angular/animations';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  constructor() {}

  public getScreenWidth: any;
  public getScreenHeight: any;
  public collapse: boolean = false;
  public responsiveBrk : number = 768;

  ngOnInit(): void {
    this.onWindowResize();
  }

  toggleCollapse(): void {
    this.collapse = !this.collapse;
    console.log(this.collapse);
  }

  @HostListener('window:resize', ['$event'])
  onWindowResize() {
    this.getScreenWidth = window.innerWidth;
    this.getScreenHeight = window.innerHeight;

    if (this.getScreenWidth >= 768) {
      //  TODO : READ Sass variable to prevent magic numbers
      this.collapse = false;
      return;
    }
    this.collapse = true;
  }
}
