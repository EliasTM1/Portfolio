import { Component, OnInit } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
// import { trigger, transition, style, animate } from '@angular/animations';

// export const fadeOut = trigger('fadeOut', [
//   transition(':leave', [
//     animate('1.5s', style({ opacity: 0 }))
//   ])
// ]);

@Component({
  selector: 'app-loader',
  templateUrl: './loader.component.html',
  styleUrls: ['./loader.component.scss']
})
export class LoaderComponent implements OnInit {
  private showLoaderSubject = new BehaviorSubject<boolean>(true);
  showLoader$: Observable<boolean> = this.showLoaderSubject.asObservable();


  constructor() { }

  ngOnInit(): void {
    setTimeout(() => {
      this.showLoaderSubject.next(false); // Hide loader after 1 second
    }, 1000);
  }

}
