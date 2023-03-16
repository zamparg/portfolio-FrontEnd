import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { SwitchLoginService } from 'src/app/services/switch-login.service';
import { TokenService } from 'src/app/services/token.service';
import { LoginComponent } from '../login/login.component';
LoginComponent

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
  providers: [AuthService]
})

export class NavbarComponent implements OnInit {
  
  logIn: boolean = false;


  constructor(private router:Router, private tokenService:TokenService, private authService: AuthService, public switchLoginService:SwitchLoginService) { }
  
  switchLoginModal(){this.switchLoginService.swithLogin();
    console.log(this.switchLoginService.loginState)}
  
  logout():void{
    this.authService.logout();
    window.sessionStorage.clear()
    window.location.reload()
  }
 

  ngOnInit(): void {
    this.logIn= this.tokenService.getToken()?true:false
   }

}
