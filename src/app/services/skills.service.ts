import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Skills } from '../model/skills';

@Injectable({
  providedIn: 'root'
})
export class SkillsService {
  
  expURL='https://portfolio-backend-production-c3d9.up.railway.app/skills/'

  constructor(private httpClient:HttpClient) { }

  public lista(): Observable<Skills[]>{
    return this.httpClient.get<Skills[]>(this.expURL + 'traer');
  }
  public detail(id:number): Observable<Skills>{
    return this.httpClient.get<Skills>(this.expURL + `traer/${id}`);
  }
  public save(skills:Skills): Observable<any>{
    return this.httpClient.post<any>(this.expURL + 'crear', skills);
  }
  public update(id:number, skills:Skills): Observable<any>{
    return this.httpClient.put<any>(this.expURL + `editar/${id}`, skills);
  }
  public delete(id:number): Observable<any>{
    return this.httpClient.delete<any>(this.expURL + `borrar/${id}`);
  }
}