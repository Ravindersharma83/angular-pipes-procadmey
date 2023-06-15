import { Component, OnInit } from '@angular/core';
import { StudentsService } from './students.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'angular-pipes-procadmey';
  totalMarks : any = 600;
  filterText !: string;

  constructor(public students : StudentsService){
    console.log(typeof(this.totalMarks));
    console.log(typeof(students.students[0].marks));

    
  }
  ngOnInit(): void {
    console.log(this.filterText);
  }


  
  
}
