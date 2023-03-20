import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Skills } from 'src/app/model/skills';
import { SkillsService } from 'src/app/services/skills.service';

@Component({
  selector: 'app-editar-skils',
  templateUrl: './editar-skils.component.html',
  styleUrls: ['./editar-skils.component.css']
})
export class EditarSkilsComponent implements OnInit {

  skills:Skills; 

  constructor(private skillsService:SkillsService, private activatedRoute:ActivatedRoute, private router:Router) { }
  
 ngOnInit(): void {
      const id=this.activatedRoute.snapshot.params['id']
      this.skillsService.detail(id).subscribe(
        data=>{
          this.skills=data
        },err =>{
          alert('Error al traer el Skill')
          this.router.navigate([''])
        }

      )
    }
  
    onUpdate():void{
      const id=this.activatedRoute.snapshot.params['id']
      console.log(this.skills)
      this.skillsService.update(id, this.skills).subscribe(
        data=>{
          
          this.router.navigate([''])
        },err =>{
          alert('Error al modificar Skill')
         //this.router.navigate([''])
        }
      )
  }
}