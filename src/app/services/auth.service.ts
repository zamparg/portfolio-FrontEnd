import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { JwtDto } from '../model/jwt-dto';
import { LoginUsuario } from '../model/login-usuario';
import { NuevoUsuario } from '../model/nuevo-usuario';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  authURL = 'http://localhost:8080/auth/';
  // token:any; 

  constructor(private httpClient:HttpClient, private router:Router) { }
  
  public nuevo(nuevoUsuario:NuevoUsuario):Observable<any>{
    return this.httpClient.post<any>(this.authURL + 'nuevo', nuevoUsuario)
  }

  public login(loginUsuario:LoginUsuario):Observable<JwtDto>{
    return this.httpClient.post<JwtDto>(this.authURL + 'login', loginUsuario)
  }


  public logout(){
    window.localStorage.clear()
  };

  public isLoggedIn() {
    return(localStorage.getItem('token')!== null)

  }
}