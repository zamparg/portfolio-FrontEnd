
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Proyectos } from '../model/proyectos';

@Injectable({
  providedIn: 'root'
})
export class ProyectosService {

  expURL='https://portfolio-backend-production-c3d9.up.railway.app/proyectos/'

  constructor(private httpClient:HttpClient) { }

  public lista(): Observable<Proyectos[]>{
    return this.httpClient.get<Proyectos[]>(this.expURL + 'traer');
  }
  public detail(id:number): Observable<Proyectos>{
    return this.httpClient.get<Proyectos>(this.expURL + `traer/${id}`);
  }
  public save(proyectos:Proyectos): Observable<any>{
    return this.httpClient.post<any>(this.expURL + 'crear', proyectos);
  }
  public update(id:number, proyectos:Proyectos): Observable<any>{
    return this.httpClient.put<any>(this.expURL + `editar/${id}`, proyectos);
  }
  public delete(id:number): Observable<any>{
    return this.httpClient.delete<any>(this.expURL + `borrar/${id}`);
  }

}
