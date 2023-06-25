import { Component, Input, OnInit } from '@angular/core';
// TODO: Implement Runes to split emjis without breaking them while erasing or typing
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
    let wordArray = Array.from(this.words[this.wordIndex]);
    if (!this.isErasing && this.charIndex <= wordArray.length) {
      this.currentWord += wordArray[this.charIndex] || '';
      this.charIndex++;
      setTimeout(() => this.typeWord(), this.typingDelay);
    } else if (!this.isErasing && this.charIndex >= wordArray.length) {
      this.isErasing = true;
      setTimeout(() => this.typeWord(), this.nextWordDelay);
    } else if (this.isErasing && this.charIndex > 0) {
      // slice does not handle unicode correctly
      // we should convert currentWord to an array, slice it and then join back to string
      this.currentWord = Array.from(this.currentWord).slice(0, -1).join('');
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
