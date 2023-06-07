import { trigger, transition, style, animate } from '@angular/animations';

export const fadeInAnimation = 
  trigger('fadeInAnimation', [
    transition(':enter', [
      style({ opacity: 0 }),
      animate('500ms', style({ opacity: 1 }))
    ]),
    transition(':leave', [
      animate('500ms', style({ opacity: 0 }))
    ])
  ]);

export const slideTopFadeInAnimation =
  trigger('slideTopFadeInAnimation', [
    transition(':enter', [
      style({ opacity: 0 }),
      animate('1000ms', style({ opacity: 1 }))
    ]),
    transition(':leave', [
      style({ opacity: 1 }),
      animate('1000ms', style({ opacity: 0, top: -50}))
    ])
  ]);

  export const slideBottomFadeInAnimation =
  trigger('slideBottomFadeInAnimation', [
    transition(':enter', [
      style({ opacity: 0 }),
      animate('1000ms', style({ opacity: 1 }))
    ]),
    transition(':leave', [
      style({ opacity: 1 }),
      animate('1000ms', style({ opacity: 0, bottom: -50}))
    ])
  ]);

  export const slideLeftFadeInAnimation =
  trigger('slideLeftFadeInAnimation', [
    transition(':enter', [
      style({ opacity: 0 }),
      animate('1000ms', style({ opacity: 1 }))
    ]),
    transition(':leave', [
      style({ opacity: 1 }),
      animate('1000ms', style({ opacity: 0, left: -50}))
    ])
  ]);

  export const slideRightFadeInAnimation =
  trigger('slideRightFadeInAnimation', [
    transition(':enter', [
      style({ opacity: 0 }),
      animate('1000ms', style({ opacity: 1 }))
    ]),
    transition(':leave', [
      style({ opacity: 1 }),
      animate('1000ms', style({ opacity: 0, right: -50}))
    ])
  ]);
  