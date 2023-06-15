import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
    name:'filterStudent'
})
export class FilterPipe implements PipeTransform{
    transform(students: any, filterText: string) {
        if(students.length === 0 || filterText === undefined || filterText === ''){
            return students;
        }else{
            return students.filter((student:any)=>{
                return student?.gender?.toLowerCase() === filterText?.toLowerCase()
            })
        }
    }   
}


// to use this pipe , we have to register this pipe in app.module.ts
// after that we use this pipe with its name in html file/