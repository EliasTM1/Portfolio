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
  renderDelay = false

  ngOnInit(): void {
    init({startEvent: 'DOMContentLoaded'});
    setTimeout(() => this.renderDelay = true, 1100)
    setTimeout(() => this.showLoader = false, 1300)
  }

}
