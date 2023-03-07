import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SwitchLoginService {
  loginState = false

  constructor() { }
  swithLogin(){
    this.loginState = (!this.loginState)
  }
}
