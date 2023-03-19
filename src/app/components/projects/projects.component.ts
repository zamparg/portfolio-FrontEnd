import { Component, OnInit } from '@angular/core';
import { Proyectos } from 'src/app/model/proyectos';
import { ProyectosService } from 'src/app/services/proyectos.service';
import { TokenService } from 'src/app/services/token.service';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {

  proyectos:Proyectos[] = []


  constructor(private proyectosService:ProyectosService, private tokenService:TokenService) { }

  isLogged = false
  ngOnInit(): void {
    this.cargarProyectos()
    
    if(this.tokenService.getToken()){
      this.isLogged=true
    }else{
      this.isLogged=false
    }
    }
    
    cargarProyectos():void{
      this.proyectosService.lista().subscribe(data=>{this.proyectos=data})
    }

    delete(id?:number){
      if(confirm('Realmente desea eliminar este Proyecto?')){
      if(id!=undefined){
        this.proyectosService.delete(id).subscribe(
          data=>{
            this.cargarProyectos()
          }, err =>{
            alert('No se ha podido cargar la proyectos')
          }
        )
      }
    }
  }
}
