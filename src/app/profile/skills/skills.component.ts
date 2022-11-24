import { Component, OnInit } from '@angular/core';
import { skillSet, Skill } from './constants'
@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss']
})
export class SkillsComponent implements OnInit {

  constructor() { }

  public skills : Skill[] = skillSet;

  ngOnInit(): void {
  }

}
