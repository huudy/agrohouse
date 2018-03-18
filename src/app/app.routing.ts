import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { RoomComponent } from './room/room.component';



const routes: Routes = [
    { path: '', component: RoomComponent }
];
export const routing = RouterModule.forRoot(routes);
