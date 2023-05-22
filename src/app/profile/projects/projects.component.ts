import { Component, OnInit } from '@angular/core';
import { Categories, filterCategories } from './constants';
import { HttpClient } from '@angular/common/http';
import { currentProjects, Project } from './projects';


@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {

  public categories : Categories[] = filterCategories;
  projects: Project[] = currentProjects;

  ngOnInit(): void {

  }

}
