import { BookingComponent } from './../booking/booking.component';
import { RoomService } from './room.service';
import { RoomDetailComponent } from './room-detail/room-detail.component';
import { RoomComponent } from './room.component';
import { NgModule } from '@angular/core';
import { NgDatepickerModule } from 'ng2-datepicker'

import { CommonModule } from '@angular/common';
import { RoomListComponent } from './room-list/room-list.component';
import { RoomsComponent } from './rooms/rooms.component';
import { RouterModule } from '@angular/router';
import { SpinnerComponent } from '../spinner/spinner.component';
import { CalendarModule } from 'angular-calendar';
import { ReactiveFormsModule } from '@angular/forms';
import { BookingModule } from '../booking/booking.module';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    CalendarModule.forRoot(),
    NgDatepickerModule,
    ReactiveFormsModule,
    BookingModule
  ],
  declarations: [
    RoomComponent,
    RoomListComponent,
    RoomDetailComponent,
    RoomsComponent,    
    SpinnerComponent,  
    
  ],
  providers:[RoomService],
  exports:[RoomsComponent]
})
export class RoomModule { }
