import { trigger, transition, style, animate } from '@angular/animations';

export const fadeInAnimation = 
  trigger('fadeInAnimation', [
    transition(':enter', [
      style({ opacity: 0 }),
      animate('1000ms', style({ opacity: 1 }))
    ]),
    transition(':leave', [
      animate('500ms', style({ opacity: 0 }))
    ])
  ]);