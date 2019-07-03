import {
  Directive,
  Input,
  HostListener,
  ElementRef,
  HostBinding,
  Renderer2
} from '@angular/core';

@Directive({
  selector: '[tooltip]'
})
export class TooltipDirective {
  // private tooltipElement = document.createElement('div');
  private tooltipElement = this.renderer.createElement('div');

  @Input() set tooltip(newVal: string) {
    this.tooltipElement.innerText = newVal;
  }

  @Input()
  @HostBinding('style.color')
  tooltipColor = 'red';

  constructor(private elementRef: ElementRef, private renderer: Renderer2) {}

  @HostListener('mouseenter')
  onmouseEnter() {
    this.renderer.appendChild(
      this.elementRef.nativeElement,
      this.tooltipElement
    );
    // this.elementRef.nativeElement.appendChild(this.tooltipElement);
  }

  @HostListener('mouseleave')
  onmouseLeave() {
    this.renderer.removeChild(
      this.elementRef.nativeElement,
      this.tooltipElement
    );
    //this.elementRef.nativeElement.removeChild(this.tooltipElement);
  }
}
