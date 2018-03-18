export class Room{
    constructor(public id:String, public beds:number, public img:string , public bookings?:any[], public reserved?:any[]){}
}