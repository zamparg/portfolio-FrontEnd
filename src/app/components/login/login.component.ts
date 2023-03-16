import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginUsuario } from 'src/app/model/login-usuario';
import { AuthService } from 'src/app/services/auth.service';
import { SwitchLoginService } from 'src/app/services/switch-login.service';
import { TokenService } from 'src/app/services/token.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public show = false
  
  showLogin(){
    this.show =true
  }
  hideLogin(){
    this.show =false
  }

  isLogged=false
  isLoginFail=false
  loginUsuario!: LoginUsuario
  nombreUsuario: string =''
  password: string =''
  roles: string[] = []
  errMsj!: string

  constructor(private authService: AuthService, private tokenService:TokenService, private router:Router, public switchLoginService:SwitchLoginService) {}
  

  ngOnInit(): void { 
    if(this.tokenService.getToken()){
      this.isLogged=true
      this.isLoginFail=false
      this.roles = this.tokenService.getAuthorities();
    }
  }
  
  onLogin():void{
    this.loginUsuario=new LoginUsuario(this.nombreUsuario, this.password); 
    console.log(this.loginUsuario)
    
    this.authService.login(this.loginUsuario).subscribe(
      data=>{
        this.isLogged=true
        this.isLoginFail=false
        this.tokenService.setToken(data.token)
        this.tokenService.setUserName(data.nombreUsuario)
        this.tokenService.setAuthorities(data.authorities)
        this.roles= data.authorities
        this.switchLoginService.swithLogin()
        window.location.reload()
      }, err=>{
        this.isLogged=false
        this.isLoginFail=true
        this.errMsj=err.error.mensaje
        console.log(this.errMsj)
      }
    )
  }
 
}
