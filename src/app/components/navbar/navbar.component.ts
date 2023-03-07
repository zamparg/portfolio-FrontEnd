import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { SwitchLoginService } from 'src/app/services/switch-login.service';
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


  constructor(private authService: AuthService, public switchLoginService:SwitchLoginService) { }
  
  switchLoginModal(){this.switchLoginService.swithLogin();
    console.log(this.switchLoginService.loginState)}
  
  logout(){this.authService.logout()}
 

  ngOnInit(): void {
    this.logIn= this.authService.isLoggedIn()

   }

}
