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
  public collapseMenu: boolean = false;
  public responsiveBrk : number = 768;
  public resumeUrl: string = '/assets/your-resume.pdf';


  ngOnInit(): void {
    this.onWindowResize();
  }

  toggleCollapse(): void {

    if (this.getScreenWidth >= this.responsiveBrk)
      return;


    this.collapseMenu = !this.collapseMenu;
    console.log(this.collapseMenu);
  }

  @HostListener('window:resize', ['$event'])
  onWindowResize() {
    this.getScreenWidth = window.innerWidth;
    this.getScreenHeight = window.innerHeight;

    if (this.getScreenWidth >= this.responsiveBrk) {
      //  TODO : READ Sass variable to prevent magic numbers
      this.collapseMenu = false;
      return;
    }
    this.collapseMenu = true;
  }
}
