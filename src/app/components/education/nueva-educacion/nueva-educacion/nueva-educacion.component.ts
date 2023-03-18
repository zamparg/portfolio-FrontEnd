
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Educacion } from 'src/app/model/educacion';
import { EducacionService } from 'src/app/services/educacion.service';

@Component({
  selector: 'app-nueva-educacion',
  templateUrl: './nueva-educacion.component.html',
  styleUrls: ['./nueva-educacion.component.css']
})
export class NuevaEducacionComponent implements OnInit {

  time : string = ''
  tittle : string = ''
  academy : string = ''

  constructor(private educacionService:EducacionService, private router:Router) { }

  ngOnInit(): void {
  }

  onCreate():void{
    const educ = new Educacion(this.time, this.tittle, this.academy)
    this.educacionService.save(educ).subscribe(data=>{
      alert('Experiencia agregada con éxito');
      this.router.navigate([''])
    }, err =>{
      alert('Error al crear la experiencia')
      this.router.navigate([''])
    })
  }

}
