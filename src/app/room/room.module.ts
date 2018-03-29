import { RoomService } from './room.service';
import { RoomDetailComponent } from './room-detail/room-detail.component';
import { RoomComponent } from './room.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RoomListComponent } from './room-list/room-list.component';
import { RoomsComponent } from './rooms/rooms.component';
import { RouterModule } from '@angular/router';
import { SpinnerComponent } from '../spinner/spinner.component';
import { CalendarModule } from 'angular-calendar';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    CalendarModule.forRoot(),
  ],
  declarations: [
    RoomComponent,
    RoomListComponent,
    RoomDetailComponent,
    RoomsComponent,
    
  ],
  providers:[RoomService],
  exports:[RoomsComponent]
})
export class RoomModule { }
