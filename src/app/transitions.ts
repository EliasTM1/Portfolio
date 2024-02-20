import { trigger, transition, style, animate } from '@angular/animations';

export const fadeOff = trigger('fadeOff', [
    transition(':leave', [
        animate('300ms ease-out', style({ opacity: 0 }))
    ])
]);

export const fadeIn = trigger('fadeIn', [
    transition(':enter', [
        style({ opacity: 0 }),
        animate('300ms ease-in', style({ opacity: 1 }))
    ])
]);
