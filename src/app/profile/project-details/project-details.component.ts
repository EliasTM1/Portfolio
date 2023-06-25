import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-project-details',
  templateUrl: './project-details.component.html',
  styleUrls: ['./project-details.component.scss']
})
export class ProjectDetailsComponent implements OnInit {

  // @Input() img: any;
  // @Input() description: any;
  // @Input() name: any;
  // @Input() features: any;
  // @Input() edia: any;
  // @Input() gitHubLink: any;
  urlProjectName : string  = ''

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.urlProjectName = decodeURIComponent(params['encodedTitle']);
      console.log(this.urlProjectName)
    });

  }

}
