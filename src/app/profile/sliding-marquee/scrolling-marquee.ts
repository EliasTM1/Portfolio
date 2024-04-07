import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-scrolling-marquee',
  templateUrl: './scrolling-marquee.html',
  styleUrls: ['./scrolling-marquee.component.scss'],
})
export class ScrollingMarqueeComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  @Input() legend: string = '';
  @Input() subLegend?: string = '';
  @Input() color?: string = '';
}
