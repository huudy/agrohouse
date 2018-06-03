import { Component, OnInit,Input } from '@angular/core';
import { BookingService } from './booking.service';
import { DatepickerOptions } from 'ng2-datepicker';
import * as frLocale from 'date-fns/locale/en';
// import { networkInterfaces } from 'os';
import { FormGroup, FormControl,Validators} from '@angular/forms';
import { Booking } from './booking.model';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { Room } from '../room/room.model';
import { RoomService } from '../room/room.service';
// var dateFormat = require('dateformat');
import * as dateFormat from 'dateformat';


@Component({
    selector: 'app-booking',
    templateUrl: './booking.component.html',
    styleUrls:['./booking.component.css']
})
export class BookingComponent implements OnInit {

    constructor(private bookingSvc:BookingService,private roomSvc:RoomService,  private route: ActivatedRoute,private router:Router) {}

    ngOnInit() {
        this.route.params.subscribe(params => {
            this.roomId = params['id'];
        });
        this.roomSvc.findById(this.roomId).subscribe((room) =>{ 
            this.room = room;
        });        
    }

    room:Room;
    

    checkRoom(){
     console.log(this.room);
    }
    

    bookingForm: FormGroup;

    startDate:Date = new Date();
    endDate:Date= new Date();
    roomId:string;
    

    options: DatepickerOptions = {
        minYear: 2018,
        maxYear: 2020,
        displayFormat: 'MMM D[,] YYYY',
        barTitleFormat: 'MMMM YYYY',
        dayNamesFormat: 'dd',
        firstCalendarDay: 1, // 0 - Sunday, 1 - Monday
        locale: frLocale,
        minDate: new Date(Date.now()- 86400000), // Minimal selectable date getting always yesterday date that is: 24 * 60 * 60 * 1000
        maxDate: new Date(2020,1,1),  // Maximal selectable date
        barTitleIfEmpty: 'Click to select a date'
    };

    dateCheck(date:any){
        for (var i = 0; i < this.room.reserved.length; i++) {
            if (dateFormat( date, "isoDate") <=this.room.reserved[i].startDate&&dateFormat( date, "isoDate")>=this.room.reserved[i].endDate) {
                alert('this date is taken already'+ dateFormat( this.startDate, "isoDate")+" and the end:  "+dateFormat( this.endDate, "isoDate"))
            }
        }
    }

    onSubmit(){
        if(this.startDate>=this.endDate){
           alert('Start date cannot be before or on the end date'+ dateFormat( this.startDate, "isoDate")+" and the end:  "+dateFormat( this.endDate, "isoDate"))
        }
        
        const booking = new Booking(dateFormat( this.startDate, "isoDate"),dateFormat( this.endDate, "isoDate"),this.roomId);
        console.log('service: ',booking);
        
        this.bookingSvc.setBooking(booking).subscribe((doc)=>{
            console.log(doc);
            alert("Booking was successful: "+JSON.stringify(doc));
            this.router.navigate(['/rooms']);
        });
    }
}