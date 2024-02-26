import { Component, OnInit } from '@angular/core';
import {init} from "aos";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'portfolio';
  showLoader = true
  styler = true

  ngOnInit(): void {
    init({startEvent: 'DOMContentLoaded'});
    setTimeout(() => this.styler = false, 800)
    setTimeout(() => this.showLoader = false, 1300)
  }

}
