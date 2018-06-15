import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BookingComponent } from '../../booking/booking.component';
import { BookingModule } from '../../booking/booking.module';

@NgModule({
  imports: [
    CommonModule,
    BookingModule
  ],
  exports:[
    
  ],
  declarations: []
})
export class InstructorModule { }
