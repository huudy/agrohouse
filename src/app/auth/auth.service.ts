import { Injectable } from '@angular/core';
import { User } from './user.model';
import { Http, Headers, Response } from '@angular/http';
import 'rxjs/Rx';
import {Observable} from 'rxjs';
import { ErrorService } from '../errors/error.service';

@Injectable()
export class AuthService {
    constructor(private http:Http, private errorSvc:ErrorService){}

    url = "http://localhost:5000"

    signup(user:User){
        const body = JSON.stringify(user);
        const header = new Headers({
            'content-type':'application/json'
        });
        return this.http.post(this.url+'/register', body, {headers:header})
        .map((response:Response) => response.json())
        .catch((error:Response)=>{
            this.errorSvc.handleError(error.json());
            return Observable.throw(error.json())
        });

    }

    login(user:User){
        const body = JSON.stringify(user);
        console.log("Authservice ", body)
        const header = new Headers({
            'Content-Type':'application/json'
        });
        return this.http.post(this.url+'/login', {email:user.email,password:user.password}, {headers:header})
        .map((response:Response) => response.json())
        .catch((error:Response)=>{
            this.errorSvc.handleError(error.json());
            return Observable.throw(error.json())
        });
    }

    logout(){
        localStorage.clear();
    }

    isLoggedIn(){
        return localStorage.getItem('token') !== null;
    }

    public isAuthenticated(): boolean {
        // Check whether the current time is past the
        // Access Token's expiry time
        const expiresAt = JSON.parse(localStorage.getItem('expires_at'));
        return new Date().getTime() < expiresAt;
      }







}