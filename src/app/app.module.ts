import { LogoutComponent } from './auth/logout.component';
import { BookingComponent } from './booking/booking.component';
import { BookingService } from './booking/booking.service';
import { SignupComponent } from './auth/signup.component';
import { RoomModule } from './room/room.module';
import { RouterModule } from '@angular/router';
import { ErrorService } from './errors/error.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgDatepickerModule } from 'ng2-datepicker'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { AuthService } from './auth/auth.service';
import { routing } from './app.routing';
import { SpinnerComponent } from './spinner/spinner.component';
import { HttpModule } from '@angular/http';
import { CalendarModule } from 'angular-calendar';
import { LoginComponent } from './auth/login.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ErrorComponent } from './errors/error.component';
import { TokenService } from './auth/token.service';
import { InstructorComponent } from './instructor/instructor/instructor.component';
import { InstructorDetailComponent } from './instructor/instructor-detail/instructor-detail.component';
import { InstructorListComponent } from './instructor/instructor-list/instructor-list.component';
import { IntructorsComponent } from './instructor/intructors/intructors.component';
import { InstructorService } from './instructor/instructor.service';
import { InstructorModule } from './instructor/instructor/instructor.module';
import { BookingModule } from './booking/booking.module';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    LoginComponent,
    SignupComponent,
    LogoutComponent,
    ErrorComponent,
    InstructorComponent,
    InstructorDetailComponent,
    InstructorListComponent,
    IntructorsComponent,
    
  ],
  imports: [
    BrowserModule,
    routing,
    ReactiveFormsModule,
    HttpModule,
    CalendarModule.forRoot(),
    NgDatepickerModule,
    BrowserAnimationsModule,
    RoomModule,
    InstructorModule,
    BookingModule
  ],
  exports:[
  
  ],
  providers: [
    AuthService,
    ErrorService,
    BookingService,
    TokenService,
    InstructorService
    ], 
  bootstrap: [AppComponent]
})
export class AppModule { }
