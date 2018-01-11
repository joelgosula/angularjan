import { NgModule } from '@angular/core';
import { LoginComponent } from './login.component';
import { RestrictInput } from '../directives/restrict.directive';

@NgModule({
    declarations: [LoginComponent],
    imports: [],
    providers:[],
    exports: [LoginComponent]
})
export class LoginModule { }