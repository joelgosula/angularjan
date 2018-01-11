import {NgModule} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RegisterComponent } from './register.component';
import { FormsModule } from '@angular/forms';
import { RestrictInput } from '../directives/restrict.directive';
import { DatePicker } from '../directives/datepicker';
import { DropDownComponent } from '../components/dropdown';

@NgModule({
    declarations:[RegisterComponent,RestrictInput,DatePicker,DropDownComponent],
    imports:[FormsModule,BrowserModule,
        ],
    providers:[],
    exports:[RegisterComponent]
})
export class RegisterModule{}