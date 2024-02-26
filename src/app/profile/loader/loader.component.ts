import { Component, OnInit } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Component({
  selector: 'app-loader',
  templateUrl: './loader.component.html',
  styleUrls: ['./loader.component.scss']
})
export class LoaderComponent implements OnInit {
  public showLoaderSubject = false
  public initTrue = true


  constructor() { }

  ngOnInit(): void {
    setTimeout(() => {
      this.showLoaderSubject = true
    }, 400);
  }

}
