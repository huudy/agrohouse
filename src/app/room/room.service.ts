import { Room } from './room.model';
import { Injectable } from '@angular/core';
import {Http, Response,Headers} from '@angular/http';
import 'rxjs/Rx';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class RoomService {

    constructor(private http:Http){
        console.log(this.url);
    }

    url = "http://localhost:5000";

    private rooms:Room[]=[];
    

     base64ArrayBuffer = function(arrayBuffer) {
        var base64    = ''
        var encodings = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/'
      
        var bytes         = new Uint8Array(arrayBuffer)
        var byteLength    = bytes.byteLength
        var byteRemainder = byteLength % 3
        var mainLength    = byteLength - byteRemainder
      
        var a, b, c, d
        var chunk
      
        // Main loop deals with bytes in chunks of 3
        for (var i = 0; i < mainLength; i = i + 3) {
          // Combine the three bytes into a single integer
          chunk = (bytes[i] << 16) | (bytes[i + 1] << 8) | bytes[i + 2]
      
          // Use bitmasks to extract 6-bit segments from the triplet
          a = (chunk & 16515072) >> 18 // 16515072 = (2^6 - 1) << 18
          b = (chunk & 258048)   >> 12 // 258048   = (2^6 - 1) << 12
          c = (chunk & 4032)     >>  6 // 4032     = (2^6 - 1) << 6
          d = chunk & 63               // 63       = 2^6 - 1
      
          // Convert the raw binary segments to the appropriate ASCII encoding
          base64 += encodings[a] + encodings[b] + encodings[c] + encodings[d]
        }
      
        // Deal with the remaining bytes and padding
        if (byteRemainder == 1) {
          chunk = bytes[mainLength]
      
          a = (chunk & 252) >> 2 // 252 = (2^6 - 1) << 2
      
          // Set the 4 least significant bits to zero
          b = (chunk & 3)   << 4 // 3   = 2^2 - 1
      
          base64 += encodings[a] + encodings[b] + '=='
        } else if (byteRemainder == 2) {
          chunk = (bytes[mainLength] << 8) | bytes[mainLength + 1]
      
          a = (chunk & 64512) >> 10 // 64512 = (2^6 - 1) << 10
          b = (chunk & 1008)  >>  4 // 1008  = (2^6 - 1) << 4
      
          // Set the 2 least significant bits to zero
          c = (chunk & 15)    <<  2 // 15    = 2^4 - 1
      
          base64 += encodings[a] + encodings[b] + encodings[c] + '='
        }
        
        return base64
      }

   
    
    getRooms(){
      return this.http.get(this.url+'/rooms')
      .map((response)=>{ 
          const rooms = JSON.parse(response.json());
          console.log('Rooms: '+response)
          console.log('JSONRooms: '+rooms)
          let transformedRooms: Room[] =[]; 
          for(let room of rooms){
              console.log('One room: '+room._id.$oid)
              
              transformedRooms.push(new Room(room._id.$oid, room.beds, room.img, room.bookings_id ));
          }
          this.rooms = transformedRooms;      
          return transformedRooms;
      })
      .catch((error:Response)=>{
          console.log('Error: '+error)
          return Observable.throw(error.json())
      }); 
    }

    findById(id){
        return this.http.get(this.url+'/room/'+id)
        .map((response:Response)=>{
            var res = JSON.parse(response.json());
            console.log(res);
            var room = new Room(res._id.$oid, res.beds, res.img, res.bookings, res.reserved);
            console.log(room);
            return room;
        })
        .catch((error:Response)=>{
            return Observable.throw(error.json())
        }); 
    }
}