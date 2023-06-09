// creating a custom pipe

import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
    name : 'percentage',
})

export class PercentagePipe implements PipeTransform{
    transform(value: number,decimal:number) : any {
        // console.log(typeof(parseInt((value * 100).toFixed(decimal))));
        
        return parseFloat((value * 100).toFixed(decimal));
    }
}

// to use this pipe , we have to register this pipe in app.module.ts
// after that we use this pipe with its name in html file/