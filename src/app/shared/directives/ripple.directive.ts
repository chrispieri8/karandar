import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appRipple]',
})
export class RippleDirective {
  // circle: HTMLElement;

  constructor(private el: ElementRef) {}

  @HostListener('click', ['$event']) onClick(event: MouseEvent) {
    const element = this.el.nativeElement;
    element.style.position = 'relative';
    element.style.overflow = 'hidden';
    const circle = document.createElement('span');
    const diameter = Math.max(element.clientWidth, element.clientHeight);
    const radius = diameter / 2;
    circle.style.width = circle.style.height = `${diameter}px`;
    circle.style.left = `${event.clientX - (element.offsetLeft + radius)}px`;
    circle.style.top = `${event.clientY - (element.offsetTop + radius)}px`;
    circle.classList.add('ripple');
    element.appendChild(circle);
  }
}
