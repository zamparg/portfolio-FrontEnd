import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Persona } from '../model/persona.model';

@Injectable({
  providedIn: 'root'
})
export class PersonaService {
  URL = 'https://portfolio-backend-production-c3d9.up.railway.app/personas/'
  
  constructor(private http: HttpClient) { } 
    public getPersona():Observable<Persona>{
      return this.http.get<Persona>(this.URL+"traer/perfil")
    }

    //Edita el perfil
    public update(persona:Persona): Observable<any>{
      return this.http.put<any>(this.URL + `editar/2`, persona);
    }


 
}
