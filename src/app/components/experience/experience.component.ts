import { Component, OnInit } from '@angular/core';
import { Experiencia } from 'src/app/model/experiencia';
import { ExperienciaService } from 'src/app/services/experiencia.service';
import { TokenService } from 'src/app/services/token.service';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.css']
})
export class ExperienceComponent implements OnInit {

  dataPortfolioE:any;
  experiencia:Experiencia[] = []


  constructor(private experienciaService:ExperienciaService, private tokenService:TokenService) { }

  isLogged = false
  ngOnInit(): void {
    this.cargarExperiencia()
    
    if(this.tokenService.getAuthorities().includes('ROLE_ADMIN')){
      this.isLogged=true
    }else{
      this.isLogged=false
    }
    }
    
    cargarExperiencia():void{
      this.experienciaService.lista().subscribe(data=>{this.experiencia=data})
    }

    delete(id?:number){
      if(confirm('Realmente desea eliminar esta Experiencia?')){
      if(id!=undefined){
        this.experienciaService.delete(id).subscribe(
          data=>{
            this.cargarExperiencia()
          }, err =>{
            alert('No se ha podido cargar la experiencia')
          }
        )
      }
    }
    }
}
