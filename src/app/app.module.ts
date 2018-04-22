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


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    LoginComponent,
    SignupComponent,
    LogoutComponent,
    ErrorComponent
  ],
  imports: [
    BrowserModule,
    routing,
    ReactiveFormsModule,
    HttpModule,
    CalendarModule.forRoot(),
    NgDatepickerModule,
    BrowserAnimationsModule,
    RoomModule
  ],
  providers: [
    AuthService,
    ErrorService,
    BookingService,
    TokenService
    ], 
  bootstrap: [AppComponent]
})
export class AppModule { }
