import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BookingComponent } from './booking.component';
import { NgDatepickerModule } from 'ng2-datepicker';

@NgModule({
  imports: [
    CommonModule,
    NgDatepickerModule
  ],
  exports:[BookingComponent],
  declarations: [BookingComponent]
})
export class BookingModule { }
