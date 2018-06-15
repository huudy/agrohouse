import { Component, OnInit, Input } from '@angular/core';
import { Instructor } from '../instructor.model';

@Component({
  selector: 'app-instructor',
  templateUrl: './instructor.component.html',
  styleUrls: ['./instructor.component.css']
})
export class InstructorComponent implements OnInit {

  constructor() { }
  @Input() instructor:Instructor


  ngOnInit() {
  }
 
}
 