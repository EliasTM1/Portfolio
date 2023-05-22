import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-project-card',
  templateUrl: './project-card.component.html',
  styleUrls: ['./project-card.component.scss']
})
export class ProjectCardComponent implements OnInit {

  constructor() { }

  @Input() title!: string;
  @Input() technologies!: string[];
  @Input() description!: string;
  @Input() repoLink!: string;
  @Input() demoLink!: string;
  @Input() image!: string;


  ngOnInit(): void {
  }

}
