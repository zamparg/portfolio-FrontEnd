import { Component, OnInit } from '@angular/core';
import { Persona } from 'src/app/model/persona.model';
import { PersonaService } from 'src/app/services/persona.service';
import { TokenService } from 'src/app/services/token.service';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  persona:Persona = new Persona("","","","");
  
  constructor(public personaService:PersonaService, private tokenService:TokenService) { }
  isLogged = false  

  ngOnInit(): void {
    this.personaService.getPersona().subscribe(data => {
      this.persona = data 
    })

    if(this.tokenService.getToken()){
      this.isLogged=true
    }else{
      this.isLogged=false
    }
    }

  }
    


