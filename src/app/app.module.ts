import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { RoomComponent } from './room/room/room.component';
import { RoomDetailComponent } from './room/room-detail/room-detail.component';
import { RooListComponent } from './room/roo-list/roo-list.component';
import { RoomListComponent } from './room/room-list/room-list.component';
import { RoomsComponent } from './room/rooms/rooms.component';


@NgModule({
  declarations: [
    AppComponent,
    RoomComponent,
    RoomDetailComponent,
    RooListComponent,
    RoomListComponent,
    RoomsComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
