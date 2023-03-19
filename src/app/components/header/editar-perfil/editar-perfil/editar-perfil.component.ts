import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Persona } from 'src/app/model/persona.model';
import { PersonaService } from 'src/app/services/persona.service';

@Component({
  selector: 'app-editar-perfil',
  templateUrl: './editar-perfil.component.html',
  styleUrls: ['./editar-perfil.component.css']
})
export class EditarPerfilComponent implements OnInit {

  persona:Persona; 

  constructor(private personaService:PersonaService, private activatedRoute:ActivatedRoute, private router:Router) { }
  
    ngOnInit(): void {
      const id=this.activatedRoute.snapshot.params['id']
      this.personaService.getPersona().subscribe(
        data=>{
          this.persona=data
        },err =>{
          alert('Error al traer La persona')
          this.router.navigate([''])
        }

      )
    }
  
    onUpdate():void{
      
      this.personaService.update(this.persona).subscribe(
        data=>{
          
          this.router.navigate([''])
        },err =>{
          alert('Error al Modificar el usuario')
         //this.router.navigate([''])
        }
      )
  }
}