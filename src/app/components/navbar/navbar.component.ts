import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
  providers: [AuthService]
})

export class NavbarComponent implements OnInit {
  
  logIn: boolean = false;


  constructor(private authService: AuthService) { }

  logout(){this.authService.logout()}
 

  ngOnInit(): void {
    this.logIn= this.authService.isLoggedIn()
   }

}
