import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Skills } from '../model/skills';

@Injectable({
  providedIn: 'root'
})
export class SkillsService {
  
  expURL='http://localhost:8080/skills/'

  constructor(private httpClient:HttpClient) { }

  public lista(): Observable<Skills[]>{
    return this.httpClient.get<Skills[]>(this.expURL + 'traer');
  }
  public detail(id:number): Observable<Skills>{
    return this.httpClient.get<Skills>(this.expURL + `traer/${id}`);
  }
  public save(educacion:Skills): Observable<any>{
    return this.httpClient.post<any>(this.expURL + 'crear', educacion);
  }
  public update(id:number, educacion:Skills): Observable<any>{
    return this.httpClient.put<any>(this.expURL + `editar/${id}`, educacion);
  }
  public delete(id:number): Observable<any>{
    return this.httpClient.delete<any>(this.expURL + `borrar/${id}`);
  }
}