import { Component, OnInit } from '@angular/core';
import { Skills } from 'src/app/model/skills';
import { SkillsService } from 'src/app/services/skills.service';
import { TokenService } from 'src/app/services/token.service';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent implements OnInit {

  skills:Skills[] = [];

  constructor(private skillsService: SkillsService, private tokenService:TokenService) { }

  isLogged = false  

  ngOnInit(): void {
    this.cargarSkills()
    
    if(this.tokenService.getAuthorities().includes('ROLE_ADMIN')){
      this.isLogged=true
    }else{
      this.isLogged=false
    }
    }
    
    cargarSkills():void{
      this.skillsService.lista().subscribe(data=>{this.skills=data})
    }

    delete(id?:number){
      if(confirm('Realmente desea eliminar este Skill?')){
        if(id!=undefined){
          this.skillsService.delete(id).subscribe(
            data=>{
              this.cargarSkills()
            }, err =>{
              alert('No se qué Skill borrar')
            }
          )
        }
      }
      }
      
}

