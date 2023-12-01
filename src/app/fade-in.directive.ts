import { Directive, ElementRef, Renderer2, OnInit } from '@angular/core';

@Directive({
  selector: '[appFadeIn]'
})
export class FadeInDirective {

  constructor(private el: ElementRef, private renderer: Renderer2) { }

  ngOnInit() {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          this.renderer.addClass(this.el.nativeElement, 'fade-in-text');
          this.renderer.removeClass(this.el.nativeElement, 'invis');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.5 });

    observer.observe(this.el.nativeElement);
  }

}
