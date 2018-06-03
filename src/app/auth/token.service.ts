import { Injectable, EventEmitter } from '@angular/core';

@Injectable()
export class TokenService {

  public token:String = null;
  public expiresAt;
  public userId:String= null;

  public tokenEmitter = new EventEmitter();

  

  constructor() {
    console.log("My values: "+this.token+" ex :"+this.expiresAt+" d: "+this.userId)
   }

   isLogged(){
     return !!this.token;
   }

   public destroy(): void {
    this.token = null;
    this.userId = null;
  }

}
