import { RoomService } from './room/room.service';
import { RouterModule } from '@angular/router';
import { ErrorService } from './errors/error.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgDatepickerModule } from 'ng2-datepicker'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


import { AppComponent } from './app.component';
import { RoomComponent } from './room/room.component';
import { RoomDetailComponent } from './room/room-detail/room-detail.component';
import { RoomListComponent } from './room/room-list/room-list.component';
import { RoomsComponent } from './room/rooms/rooms.component';
import { NavbarComponent } from './navbar/navbar.component';
import { AuthService } from './auth/auth.service';
import { routing } from './app.routing';
import { SpinnerComponent } from './spinner/spinner.component';
import { HttpModule } from '@angular/http';
import { CalendarModule } from 'angular-calendar';


@NgModule({
  declarations: [
    AppComponent,
    RoomComponent,
    RoomDetailComponent,
    RoomListComponent,
    RoomsComponent,
    NavbarComponent,
    SpinnerComponent
  ],
  imports: [
    BrowserModule,
    routing,
    HttpModule,
    CalendarModule.forRoot(),
    NgDatepickerModule,
    BrowserAnimationsModule
  ],
  providers: [
    AuthService,
    ErrorService,
    RoomService
    ], 
  bootstrap: [AppComponent]
})
export class AppModule { }
