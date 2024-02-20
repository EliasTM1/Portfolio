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

  ngOnInit(): void {
    init({startEvent: 'DOMContentLoaded'});
    // setTimeout(() => this.showLoader = false, 2000)
    setTimeout(() => this.showLoader = false, 0)
  }

}
