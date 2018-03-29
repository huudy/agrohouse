import { RoomDetailComponent } from './room/room-detail/room-detail.component';
import { RoomsComponent } from './room/rooms/rooms.component';
import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';



const routes: Routes = [
    { path: '', redirectTo:'/room', pathMatch: 'full' },
    { path: 'rooms', component: RoomsComponent},
    { path: 'rooms/:id', component: RoomDetailComponent }
];
export const routing = RouterModule.forRoot(routes);
