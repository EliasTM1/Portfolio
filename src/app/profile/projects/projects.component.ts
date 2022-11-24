import { Component, OnInit } from '@angular/core';
import { Categories, filterCategories } from './constants';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {



  constructor() { }

  public categories : Categories[] = filterCategories;

  ngOnInit(): void {
  }

}
