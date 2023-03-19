import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Proyectos } from 'src/app/model/proyectos';
import { ProyectosService } from 'src/app/services/proyectos.service';

@Component({
  selector: 'app-nuevo-proyecto',
  templateUrl: './nuevo-proyecto.component.html',
  styleUrls: ['./nuevo-proyecto.component.css']
})
export class NuevoProyectoComponent implements OnInit {

  tittle : string = ''
  img : string = ''
  link : string = ''
  description : string = ''

  constructor(private proyectosService:ProyectosService, private router:Router) { }

  ngOnInit(): void {
  }

  onCreate():void{
    const exp = new Proyectos(this.tittle, this.img, this.link, this.description)
    this.proyectosService.save(exp).subscribe(data=>{
      alert('Proyectos agregada con éxito');
      this.router.navigate([''])
    }, err =>{
      alert('Error al crear la proyectos')
      this.router.navigate([''])
    })
  }

}
