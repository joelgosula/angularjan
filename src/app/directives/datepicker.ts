import {Directive,ElementRef,HostListener, OnInit} from '@angular/core';
declare var $: any
@Directive({
    selector:'[datepicker]'
})

export class DatePicker implements OnInit {
    constructor(private el: ElementRef){
     
    }
    ngOnInit(){
        $(this.el.nativeElement).datepicker();
    }
   
  

}