import {Directive, ElementRef, Input} from '@angular/core';

@Directive({
  selector: '[appNavChanger]'
})
export class NavChangerDirective {

  @Input() size: any;

  constructor(el: ElementRef) {
    console.log(el.nativeElement);
    if (this.size) {
      el.nativeElement.style.backgroundColor = 'yellow';
    }
  }
}
