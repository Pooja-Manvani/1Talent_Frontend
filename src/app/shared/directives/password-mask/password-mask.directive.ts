import { Directive, ElementRef, EventEmitter, HostListener, Input, Output, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appPasswordMask]'
})
export class PasswordMaskDirective {
  private _eyeIconName: string;
  @Input() public set isEyeClosed(value: boolean) {
    this.renderer.removeClass(this.el.nativeElement.children['eyeIcon'], `icon-eye-${this._eyeIconName}`);
    if (this._eyeIconName === "close") {
      this._eyeIconName = "open";
      this.el.nativeElement.children['password'].type = "text";
    } else {
      this._eyeIconName = "close";
      this.el.nativeElement.children['password'].type = "password";
    }
    this.renderer.addClass(this.el.nativeElement.children['eyeIcon'], `icon-eye-${this._eyeIconName}`);
  }

  private replaceClass(oldClass: string, newClass: string) {
    this.renderer.removeClass(this.el.nativeElement.children['eyeIcon'], oldClass);
    this.renderer.addClass(this.el.nativeElement.children['eyeIcon'], newClass);
  }

  @HostListener('input', ['$event.target']) onClick(inp: any) {
    if (inp.value.length) {
      this.replaceClass("invisible", "visible");
    } else {
      this.replaceClass("visible", "invisible");
    }
  }

  constructor(private renderer: Renderer2, private el: ElementRef) {
    this._eyeIconName = "open";
    console.log(this.el.nativeElement.children);
  }
}
