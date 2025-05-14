import { Directive, HostListener, ElementRef } from '@angular/core';
import { NgControl } from '@angular/forms';

@Directive({
  selector: '[appDateFormat]'
})
export class DateFormatDirective {

  constructor(private el: ElementRef, private control: NgControl) { }

  @HostListener('input', ['$event.target.value'])
  onInputChange(value: string) {
    let formattedValue = value.replace(/\D/g, ''); // Remove non-numeric characters

    if (formattedValue.length > 8) {
      formattedValue = formattedValue.slice(0, 8); // Limit to 8 digits (MMDDYYYY)
    }

    if (formattedValue.length >= 2) {
      formattedValue = formattedValue.slice(0, 2) + '/' + formattedValue.slice(2);
    }

    if (formattedValue.length >= 5) {
      formattedValue = formattedValue.slice(0, 5) + '/' + formattedValue.slice(5);
    }

    this.control.control?.setValue(formattedValue, { emitEvent: false });
  }
}
