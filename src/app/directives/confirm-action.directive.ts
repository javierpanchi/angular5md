import { Directive, Input, HostListener } from '@angular/core';

@Directive({
  selector: '[appConfirm]'
})
export class ConfirmActionDirective {

  @Input() appConfirm = () =>{};
  confirmMessage="Are you sure you want to delete this?";

  @HostListener('click',['$event'])
  confirmFirst() {
    if(window.confirm(this.confirmMessage)){
      this.appConfirm();
    }
  }
}
