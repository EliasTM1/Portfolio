import { Component, OnInit } from '@angular/core';
import { Difficulty, filterCategories } from './constants';
import { currentProjects, Project } from './projects';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss'],
})
export class ProjectsComponent implements OnInit {
  public categories: Difficulty[] = filterCategories;
  projects: Project[] = currentProjects;
  displayedProjexts: Project[] = [];
  selectedCategory: any = '';

  clearFilter() {
    this.displayedProjexts = this.projects;
    this.selectedCategory = '';
  }

  filterByDifficulty(difficulty?: string) {
    if (this.selectedCategory === difficulty) {
      this.clearFilter();
      return;
    }
    this.selectedCategory = difficulty;
    this.displayedProjexts = this.projects.filter(
      (project) => project.difficulty === difficulty
    );
    console.log(this.displayedProjexts, 'CURRENTDISPLAYS');
  }

  ngOnInit(): void {
    this.displayedProjexts = this.projects;
  }
}
