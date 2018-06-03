import { Injectable } from '@angular/core';
import { Booking } from './booking.model';
import { Http, Headers, Response } from '@angular/http';
import 'rxjs/Rx';
import {Observable} from 'rxjs';
import { ErrorService } from '../errors/error.service';
import { TokenService } from '../auth/token.service';
@Injectable()
export class BookingService {

    constructor(private http:Http, private errorSvc:ErrorService, private tokenSvc:TokenService){}

    url = "http://localhost:5000";

    setBooking(booking:Booking){
        const token = this.tokenSvc.token;
        console.log("Booking: ",booking);
        const body = JSON.stringify(booking);
        console.log("service booking: ", body )
        const header = new Headers({
            'Content-Type':'application/json',
            'Authorization': 'Bearer ' + token 
        });       
        

       return this.http.post(this.url+'/reserve', body,{headers:header})
        .map((response:Response) => {
            console.log(response.json())
            return response.json();
        })
        .catch((error:Response)=>{
            this.errorSvc.handleError(error.json());
            return Observable.throw(error.json())
        });
    }
}