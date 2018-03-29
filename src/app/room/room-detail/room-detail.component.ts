import { Component, OnInit, ChangeDetectionStrategy, ViewChild, TemplateRef } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { RoomService } from '../room.service';
import { Room } from '../room.model';
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
    selector: 'room-details',
    templateUrl: './room-detail.component.html',
    styleUrls:['./room-detail.component.css']
})
export class RoomDetailComponent implements OnInit {

    constructor(private roomSvc:RoomService, private route: ActivatedRoute) {}   

    ngOnInit() {
        this.sub = this.route.params.subscribe(params => {
            let id = params['id'];
            //Retrieve room with Id route param
            this.roomSvc.findById(id).subscribe((room) =>{ 

                this.room = room;
                
                var tempEvents= [];
                
                for(var i =0;i<this.room.reserved.length;i++){

                    var a = moment(this.room.reserved[i].startDate,'YYYY-MM-DD');
                    var b = moment(this.room.reserved[i].endDate,'YYYY-MM-DD');
                    
                    var diffDays = b.diff(a, 'days');

                    tempEvents.push({
                        start: new Date(this.room.reserved[i].startDate),
                        end: diffDays==1? new Date(this.room.reserved[i].startDate): new Date(this.room.reserved[i].endDate),
                        title: 'Already booked',
                        color: colors.red});    
                }
                this.events = tempEvents;
            });
        });     
    }

    room:Room;

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