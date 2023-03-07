import { Component, OnInit } from '@angular/core';
import { Persona } from 'src/app/model/persona.model';
import { PersonaService } from 'src/app/services/persona.service';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  persona:Persona = new Persona("","","","");
  

  constructor(public personaService:PersonaService) { 

  }

  ngOnInit(): void {
    this.personaService.getPersona().subscribe(data => {
      
      this.persona = data 
    })
  };
    
}

