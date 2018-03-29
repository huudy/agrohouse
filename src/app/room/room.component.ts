import { Component, OnInit, Input } from '@angular/core';
import { Room } from './room.model';

@Component({
  selector: 'app-room',
  templateUrl: './room.component.html',
  styleUrls: ['./room.component.css']
})
export class RoomComponent implements OnInit {

  constructor() { }
  @Input() room:Room;

  ngOnInit() {
  }

}
