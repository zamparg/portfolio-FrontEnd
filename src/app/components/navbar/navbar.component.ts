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
  
  loginUser: boolean = false;
  loginAdmin: boolean = false;


  constructor(private router:Router, private tokenService:TokenService, private authService: AuthService, public switchLoginService:SwitchLoginService) { }
  
  switchLoginModal(){this.switchLoginService.swithLogin()}
  
  logout():void{
    this.authService.logout();
    window.sessionStorage.clear()
    window.location.reload()
  }
 

  ngOnInit(): void {
    if (this.tokenService.getToken()){
      
      this.loginAdmin = this.tokenService.getAuthorities().includes('ROLE_ADMIN');
      this.loginUser= this.loginAdmin?false:true;

    }else{
      this.loginAdmin = false
      this.loginUser= false
    }
   }

}
