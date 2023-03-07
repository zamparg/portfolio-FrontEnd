import { Component, OnInit } from '@angular/core';
import { Persona } from 'src/app/model/persona.model';
import { PersonaService } from 'src/app/services/persona.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
  persona:Persona = new Persona("","","","");
  

  constructor(public personaService:PersonaService) { 

  }

  ngOnInit(): void {
    this.personaService.getPersona().subscribe(data => {
      
      this.persona = data 
    })
  };
    
}


