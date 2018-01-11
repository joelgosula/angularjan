import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: "searchby"
})

export class SearchByPipe implements PipeTransform {
    transform(input: Array<any>, criteria: any) {
        console.log(input);
        console.log(criteria);
        if (!criteria) {
            return input;
        }
        else {
            return input.filter(x => {
                return parseInt(x.price) >= parseInt(criteria);
            })

        }
    }

}