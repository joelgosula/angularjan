import {Component,Input,Output,EventEmitter} from '@angular/core';
@Component({
template:`<select class="form-control" [(ngModel)]="choice" (change)="choiceChanged($event)">
<option *ngFor="let d of DropdownData" [value]="d.value">{{d.text}}</option>
</select>`,
selector:'dropdown'

})
export class DropDownComponent{
    @Input()
    DropdownData :Array<any>

    @Output()
    choiceChange:EventEmitter<any>;

    choice:any;

    constructor(){
        this.DropdownData=[{text:"Please Select",value:""}]
        this.choiceChange=new EventEmitter<any>();
    }
    choiceChanged(e){
        console.log(this.choice);
        this.choiceChange.emit(this.choice);
    }

}