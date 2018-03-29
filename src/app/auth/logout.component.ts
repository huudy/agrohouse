import { Component, OnInit } from '@angular/core';
import { AuthService } from './auth.service';
import { Router } from '@angular/router';

@Component({
    selector: 'app-logout',
    templateUrl: './logout.component.html'
})
export class LogoutComponent implements OnInit {
    constructor(private authSvc:AuthService, private router:Router) { }
    onLogout(){
        this.authSvc.logout();
        this.router.navigate(['/messages']);
    }
    ngOnInit() { }
}