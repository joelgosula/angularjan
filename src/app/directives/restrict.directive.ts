import {Directive,ElementRef,HostListener} from '@angular/core';

@Directive({
    selector:'[restrictInput]'
})

export class RestrictInput {
    constructor(private el: ElementRef){
        console.log(el.nativeElement);
    }
    @HostListener('focusin',['$event'])
    OnFocusIn(){
        this.el.nativeElement.style="background-color:green"
    }
    @HostListener('focusout',['$event'])
    OnFocusOut(){
        this.el.nativeElement.style="background-color:#fff"
    }

    @HostListener('keypress',['$event'])
    OnKeyPress(e){
        var regex = new RegExp(/^[a-zA-Z]+$/)
         if(!regex.test(e.key)){
             e.preventDefault();
         }
      
    }
}