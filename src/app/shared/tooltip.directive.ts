import {
  Directive,
  Input,
  HostListener,
  ElementRef,
  HostBinding
} from '@angular/core';

@Directive({
  selector: '[tooltip]'
})
export class TooltipDirective {
  private tooltipElement = document.createElement('div');

  @Input() set tooltip(newVal: string) {
    this.tooltipElement.innerText = newVal;
  }

  constructor(private elementRef: ElementRef) {}

  @HostListener('mouseenter')
  onmouseEnter() {
    this.elementRef.nativeElement.appendChild(this.tooltipElement);
  }

  @HostListener('mouseleave')
  onmouseLeave() {
    this.elementRef.nativeElement.removeChild(this.tooltipElement);
  }
}
