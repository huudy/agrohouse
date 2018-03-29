import { RoomService } from './../room.service';
import { Component, OnInit } from '@angular/core';
import { Room } from '../room.model';

@Component({
  selector: 'app-room-list',
  templateUrl: './room-list.component.html',
  styleUrls: ['./room-list.component.css']
})
export class RoomListComponent implements OnInit {

  constructor(private roomSvc: RoomService) { }
  rooms:Room[] = [];
  loaded= false;
  ngOnInit() {
      this.roomSvc.getRooms().subscribe((res)=>{
          this.rooms = res;
          this.loaded=true;
      });
   };
}
