import { Directive, HostListener, ElementRef, Input } from '@angular/core';

@Directive({
  selector: '[appNumberOnly]'
})
export class NumberOnlyDirective {

  @Input() allowDecimal: boolean = true;

  private regex: RegExp = new RegExp(/^\d*\.?\d{0,}$/g);

  constructor(private el: ElementRef) {}

  @HostListener('input', [' $event'])
  onInputChange(event: any) {
    const initialValue = this.el.nativeElement.value;
    let newValue = initialValue.replace(/[^0-9.]*/g, '');

    if (this.allowDecimal && newValue.indexOf('.') > -1) {
      const parts = newValue.split('.');
      if (parts.length > 2) {
        newValue = parts[0] + '.' + parts[1];
      }
    } else if (!this.allowDecimal && newValue.indexOf('.') > -1) {
        newValue = newValue.split('.')[0];
    }

    this.el.nativeElement.value = newValue;
    if ( initialValue !== this.el.nativeElement.value ) {
      event.stopPropagation();
    }
  }
}
