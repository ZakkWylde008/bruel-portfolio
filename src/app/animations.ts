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

export const menuFadeInAnimation =
  trigger('menuFadeInAnimation', [
    transition(':enter', [
      style({ opacity: 0 }),
      animate('400ms', style({ opacity: 1 }))
    ]),
    transition(':leave', [
      style({ opacity: 1 }),
      animate('3000ms', style({ opacity: 0}))
    ])
  ]);

  export const videoFadeInAnimation =
  trigger('videoFadeInAnimation', [
    transition(':enter', [
      style({ opacity: 0 }),
      animate('500ms', style({ opacity: 1 }))
    ]),
    transition(':leave', [
      style({ opacity: 1 }),
      animate('500ms', style({ opacity: 0}))
    ])
  ]);
  