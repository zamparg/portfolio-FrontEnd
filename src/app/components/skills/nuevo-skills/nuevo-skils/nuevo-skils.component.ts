import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Skills } from 'src/app/model/skills';
import { SkillsService } from 'src/app/services/skills.service';

@Component({
  selector: 'app-nuevo-skils',
  templateUrl: './nuevo-skils.component.html',
  styleUrls: ['./nuevo-skils.component.css']
})
export class NuevoSkilsComponent implements OnInit {

  img : string = ''
  tittle : string = ''
  percent : number = 0
  
  constructor(private skillsService:SkillsService, private router:Router) { }

  ngOnInit(): void {
  }

  onCreate():void{
    const exp = new Skills(this.img, this.tittle, this.percent)
    this.skillsService.save(exp).subscribe(data=>{
      alert('Skills agregada con éxito');
      this.router.navigate([''])
    }, err =>{
      alert('Error al crear la skills')
      this.router.navigate([''])
    })
  }

}

