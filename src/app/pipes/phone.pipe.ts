import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: "phoneformat"
})

export class PhonePipe implements PipeTransform {
    transform(input: any, country: any,prefix:Boolean) {
        //check if the given string is 10 digit length
        //Check if the country is india or us
        //check if the prefis is needed or not.

        if(input.length==10){
            if(country=='US'){
                let format =  `${input.substring(0,3)}-${input.substring(3,6)}-${input.substring(6,10)}`;
                if(prefix){
                    return "+1-"+format;
                }
                else{
                    return format;
                }
            }
            else if(country=='IN'){
                let format =  `${input.substring(0,5)}-${input.substring(5,10)}`;
                if(prefix){
                    return "+91-"+format;
                }
                else{
                    return format;
                }
            }
            else{
                return input;
            }
        }
        else{
            return input;
        }

    }

}