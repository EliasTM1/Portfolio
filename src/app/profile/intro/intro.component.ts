import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-intro',
  templateUrl: './intro.component.html',
  styleUrls: ['./intro.component.scss']
})
export class IntroComponent implements OnInit {

  constructor() { }

  roles = ['Front-End Developer 🧰', 'Angular 😍', 'React 🥰', 'AWS 😉', 'Taco connoisseur 🌮', 'Working to make the list longer 🤓'];


  ngOnInit(): void {
  }

  scrollTo() {

  }

}
