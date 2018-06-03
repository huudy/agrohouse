import { Component, OnInit } from '@angular/core';
import { InstructorService } from '../instructor.service';
import { Instructor } from '../instructor.model';

@Component({
  selector: 'app-instructor-list',
  templateUrl: './instructor-list.component.html',
  styleUrls: ['./instructor-list.component.css']
})
export class InstructorListComponent implements OnInit {

  constructor(private instSvc:InstructorService) { }
  instructors:Instructor[]=[];
  loaded=false;

  ngOnInit() {
    this.instSvc.getInstructors().subscribe((inst)=>{
      console.log('Instructors: '+inst)
      this.instructors = inst;
      this.loaded = true;
    })

  }
}
