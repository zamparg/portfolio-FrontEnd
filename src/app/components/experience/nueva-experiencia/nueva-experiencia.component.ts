import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Experiencia } from 'src/app/model/experiencia';
import { ExperienciaService } from 'src/app/services/experiencia.service';

@Component({
  selector: 'app-nueva-experiencia',
  templateUrl: './nueva-experiencia.component.html',
  styleUrls: ['./nueva-experiencia.component.css']
})
export class NuevaExperienciaComponent implements OnInit {

  employer : string = ''
  img : string = ''
  role : string = ''
  duration : string = ''
  task : string = ''

  constructor(private experienciaService:ExperienciaService, private router:Router) { }

  ngOnInit(): void {
  }

  onCreate():void{
    const exp = new Experiencia(this.employer, this.img, this.role, this.duration, this.task)
    this.experienciaService.save(exp).subscribe(data=>{
      alert('Experiencia agregada con éxito');
      this.router.navigate([''])
    }, err =>{
      alert('Error al crear la experiencia')
      this.router.navigate([''])
    })
  }

}
