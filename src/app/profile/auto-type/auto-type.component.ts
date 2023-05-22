import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-auto-type',
  templateUrl: './auto-type.component.html',
  styleUrls: ['./auto-type.component.scss']
})
export class AutoTypeComponent implements OnInit {

  @Input() words = ['Hello', 'World', 'Auto', 'Typer'];
  currentWord = '';
  typingDelay = 100;
  eraseDelay = 50;
  nextWordDelay = 1000;
  wordIndex = 0;
  charIndex = 0;
  isErasing = false;


  constructor() { }

  ngOnInit(): void {
    this.typeWord();
  }

  typeWord() {
    if (!this.isErasing && this.charIndex <= this.words[this.wordIndex].length) {
      this.currentWord += this.words[this.wordIndex].charAt(this.charIndex) || '';
      this.charIndex++;
      setTimeout(() => this.typeWord(), this.typingDelay);
    } else if (!this.isErasing && this.charIndex >= this.words[this.wordIndex].length) {
      this.isErasing = true;
      setTimeout(() => this.typeWord(), this.nextWordDelay);
    } else if (this.isErasing && this.charIndex > 0) {
      this.currentWord = this.currentWord.slice(0, -1);
      this.charIndex--;
      setTimeout(() => this.typeWord(), this.eraseDelay);
    } else {
      this.isErasing = false;
      this.wordIndex++;
      if (this.wordIndex >= this.words.length) {
        this.wordIndex = 0;
      }
      this.charIndex = 0;
      setTimeout(() => this.typeWord(), this.typingDelay);
    }
  }

}
