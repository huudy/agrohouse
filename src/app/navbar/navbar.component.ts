import { Component, OnInit, Input } from '@angular/core';
import { TokenService } from '../auth/token.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(private tokenSvc:TokenService) { }

  ngOnInit() {
  }

 public currentToken;
  

  isLoggedIn(){
    return !!this.tokenSvc.token;
  }
      


  showToken(){
    console.log(this.tokenSvc.token)
  }

}
