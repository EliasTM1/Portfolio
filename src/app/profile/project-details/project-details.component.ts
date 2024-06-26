import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { currentProjects, Project } from '../../profile/projects/projects';

@Component({
  selector: 'app-project-details',
  templateUrl: './project-details.component.html',
  styleUrls: ['./project-details.component.scss'],
})
export class ProjectDetailsComponent implements OnInit {
  urlProjectName: string = '';
  currentProject: Project = {
    projectId: 0,
    difficulty: '',
    demo: '',
    description: '',
    repo: '',
    title: '',
    technologiesUsed: [],
    solving: '',
    details: {
      bannerImg: '',
      subBannerImg: '',
      description: '',
      descriptionSub: '',
      features: [],
      projectMedia: [],
    },
    conclussion: '',
    learned: '',
    sliderInfo: [],
  };
  featureList: string[] = [];

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.getProjectName();
  }

  getProjectName() {
    this.route.params.subscribe((params) => {
      this.urlProjectName = decodeURIComponent(params['encodedTitle']);
      this.getProjectDetails();
    });
  }

  getProjectDetails() {
    const project = currentProjects.find(
      (project: Project) => project.title === this.urlProjectName
    );
    if (project !== undefined) {
      this.currentProject = project;
      this.featureList = project!.details!.features.slice(
        0,
        project!.details!.features.length
      );
    }
  }
}
