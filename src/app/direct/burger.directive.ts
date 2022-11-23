import { Directive, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[appBurgerToggle]'
})
export class BurgerDirective {

  @HostBinding('class.is-active')
  private isActive = false;

  @HostListener('click')
  toggleActive(): void {
    this.isActive = !this.isActive;
  }

}
