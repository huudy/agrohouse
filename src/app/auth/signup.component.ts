import { Component, OnInit } from '@angular/core';
import { FormGroup,FormControl,Validators } from '@angular/forms';
import { AuthService } from './auth.service';
import { User } from './user.model';
import { Router } from '@angular/router';

@Component({
    selector: 'app-signup',
    templateUrl: './signup.component.html'
})
export class SignupComponent implements OnInit {
    constructor(private authSvc:AuthService, private router: Router) { }

    signupForm: FormGroup;

    onSubmit(){

        const user = new User(
            this.signupForm.value.email,
            this.signupForm.value.password,
            this.signupForm.value.firstname,
            this.signupForm.value.lastname       
        );

        this.authSvc.signup(user).subscribe(
            data =>console.log(data),
            error => console.log(error)
        
        )

        this.signupForm.reset();
        this.router.navigate(['/login']);
    }

    

    ngOnInit() {
        this.signupForm = new FormGroup({
            firstname: new FormControl(null,Validators.required),
            lastname: new FormControl(null,Validators.required),
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