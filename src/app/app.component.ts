import { Component, OnInit } from '@angular/core';
import {init} from "aos";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'portfolio';

  ngOnInit(): void {
    init({startEvent: 'DOMContentLoaded'});
  }

}
