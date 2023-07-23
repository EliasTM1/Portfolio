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
    demo: '',
    description: '',
    repo: '',
    title: '',
    technologiesUsed:[],
    details : {
      bannerImg: '',
      subBannerImg: '',
      description: '',
      descriptionSub: '',
      features: [],
      projectMedia: [],
      technologiesUsed: [],
    }
  };
  featureListOne : string[] = []
  featureListTwo : string[] = []

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

  getProjectDetails()  {
    const project = currentProjects.find(
      (project: Project) => project.title === this.urlProjectName
    );
    if (project !== undefined) {
      this.currentProject = project
      this.featureListOne = project!.details!.features.slice(0, project!.details!.features.length / 2);
      this.featureListTwo = project!.details!.features.slice(project!.details!.features.length / 2);
    }

  }
}
