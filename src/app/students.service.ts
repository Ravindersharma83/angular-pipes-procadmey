import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StudentsService {

  constructor() { }

  students = [
    {name:'Mark',course:'MBA',marks:520,percentage:0,gender:'male'},
    {name:'Steve',course:'Msc',marks:420,percentage:0,gender:'male'},
    {name:'Merry',course:'MCA',marks:540,percentage:0,gender:'female'},
    {name:'John',course:'MBA',marks:450,percentage:0,gender:'male'},
    {name:'Eva',course:'MCA',marks:320,percentage:0,gender:'female'},
  ];
}
