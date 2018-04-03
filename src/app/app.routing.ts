import { LogoutComponent } from './auth/logout.component';
import { SignupComponent } from './auth/signup.component';
import { RoomDetailComponent } from './room/room-detail/room-detail.component';
import { RoomsComponent } from './room/rooms/rooms.component';
import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { LoginComponent } from './auth/login.component';



const routes: Routes = [
    { path: '', redirectTo:'/rooms', pathMatch: 'full' },
    { path: 'rooms', component: RoomsComponent},
    { path: 'rooms/:id', component: RoomDetailComponent },
    { path: 'login', component: LoginComponent},
    { path: 'signup', component: SignupComponent},    
    { path: 'logout', component: LogoutComponent},
];
export const routing = RouterModule.forRoot(routes);
