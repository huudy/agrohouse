import { Component, OnInit } from '@angular/core';
import { FormGroup,FormControl,Validators } from '@angular/forms';
import { Router } from '@angular/router';


import { User } from './user.model';
import { AuthService } from './auth.service';


@Component({
    selector: 'app-login',
    templateUrl: './login.component.html'
})
export class LoginComponent implements OnInit {
    constructor(private authSvc:AuthService, private router:Router) { }

    onSubmit(){
        const user = new User(this.loginForm.value.email, this.loginForm.value.password);
        this.authSvc.login(user).subscribe(
            data=> {
                console.log("Login component ", data)
                localStorage.setItem('token', data.token);
                localStorage.setItem('userId', data.userId);
                localStorage.setItem('expires_at', JSON.stringify((data.expiresIn * 1000) + new Date().getTime()));
                this.router.navigateByUrl('/');
            },
            error => console.log("Eror login component ",error)
        );

        this.loginForm.reset();
    }

    loginForm: FormGroup;

    ngOnInit() {
        this.loginForm = new FormGroup({
            email: new FormControl(null,[
                Validators.required,
                Validators.pattern("[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?")
            ]),
            password: new FormControl(null,[
                Validators.required,
                Validators.minLength(8)
            ]),
        })
     }
}