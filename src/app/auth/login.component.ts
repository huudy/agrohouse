import { Component, OnInit } from '@angular/core';
import { FormGroup,FormControl,Validators } from '@angular/forms';
import { Router } from '@angular/router';


import { User } from './user.model';
import { AuthService } from './auth.service';
import { TokenService } from './token.service';


@Component({
    selector: 'app-login',
    templateUrl: './login.component.html'
})
export class LoginComponent implements OnInit {
    constructor(private authSvc:AuthService, private router:Router, private tokenSvc:TokenService) { }

    onSubmit(){
        const user = new User(this.loginForm.value.email, this.loginForm.value.password);
        this.authSvc.login(user).subscribe(
            data=> {
                console.log("Login component: "+JSON.stringify(data.message))
                this.tokenSvc.token = data.token
                this.tokenSvc.userId = data.userId
                this.tokenSvc.expiresAt = JSON.stringify((data.expiresIn * 1000) + new Date().getTime())
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