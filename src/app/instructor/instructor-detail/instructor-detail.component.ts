import { Component, OnInit, ChangeDetectionStrategy, ViewChild, TemplateRef } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { InstructorService } from '../instructor.service';
import { Instructor } from '../instructor.model';
import { CalendarEvent, CalendarEventAction, CalendarEventTimesChangedEvent} from 'angular-calendar';
import { Subject } from 'rxjs/Subject';
import {startOfDay, endOfDay,subDays,addDays,endOfMonth,isSameDay,isSameMonth,addHours } from 'date-fns';
import * as moment from 'moment';

const colors: any = {
  red: {
    primary: '#ad2121',
    secondary: '#FAE3E3'
  },
  blue: {
    primary: '#1e90ff',
    secondary: '#D1E8FF'
  },
  yellow: {
    primary: '#e3bc08',
    secondary: '#FDF1BA'
  }
};

@Component({
  selector: 'app-instructor-detail',
  templateUrl: './instructor-detail.component.html',
  styleUrls: ['./instructor-detail.component.css']
})
export class InstructorDetailComponent implements OnInit {

  constructor(private instrSvc:InstructorService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      let id = params['id'];
      //Retrieve instructor with Id route param
      this.instrSvc.findById(id).subscribe((instructor) =>{ 

          this.instructor = instructor;
          
          var tempEvents: CalendarEvent[]=[];
          
          for(var i =0;i<instructor.reserved.length;i++){
              
              var a = moment(this.instructor.reserved[i].start_date,'YYYY-MM-DD');
              var b = moment(this.instructor.reserved[i].end_date,'YYYY-MM-DD');
              var diffDays = b.diff(a, 'days');

              tempEvents.push({
                  start: new Date(this.instructor.reserved[i].start_date),
                  end: diffDays==1? new Date(this.instructor.reserved[i].start_date): new Date(this.instructor.reserved[i].end_date),
                  title: 'Already booked',
                  color: colors.red});    
          }
          this.events = tempEvents;
          console.log('Calendar events: '+JSON.stringify(this.events))
      });
  }); 
  }



  instructor:Instructor;

  private sub: any;

  view: string = 'month';

  viewDate: Date = new Date();

  activeDayIsOpen: boolean = true;

  events: CalendarEvent[];

  dayClicked({ date, events }: { date: Date; events: CalendarEvent[] }): void {
      if (isSameMonth(date, this.viewDate)) {
        if (
          (isSameDay(this.viewDate, date) && this.activeDayIsOpen === true) ||
          events.length === 0
        ) {
          this.activeDayIsOpen = false;
        } else {
          this.activeDayIsOpen = true;
          this.viewDate = date;
        }
      }
    }

  actions: CalendarEventAction[] = [
  {
    label: '<i class="fa fa-fw fa-pencil"></i>',
    onClick: ({ event }: { event: CalendarEvent }): void => {
     
    }
  },
  {
    label: '<i class="fa fa-fw fa-times"></i>',
    onClick: ({ event }: { event: CalendarEvent }): void => {
      this.events = this.events.filter(iEvent => iEvent !== event);
      
    }
  }
];



}
