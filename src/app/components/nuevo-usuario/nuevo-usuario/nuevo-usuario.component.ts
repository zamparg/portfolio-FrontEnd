import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NuevoUsuario } from 'src/app/model/nuevo-usuario';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-nuevo-usuario',
  templateUrl: './nuevo-usuario.component.html',
  styleUrls: ['./nuevo-usuario.component.css']
})
export class NuevoUsuarioComponent implements OnInit {

isLogged=false
isLoginFail=false

nuevo: NuevoUsuario
nombre: string = '';
nombreUsuario: string = '';
email: string = '';
password: string = '';
authorities: string[] =['ROLE_USER']


constructor(private authService: AuthService, private router:Router) {}


ngOnInit(): void { }

onCreate(): void{

  this.nuevo=new NuevoUsuario(this.nombre, this.nombreUsuario, this.email, this.password, this.authorities); 
  this.authService.nuevo(this.nuevo).subscribe(data=>{
    alert('Usuario agregado con éxito');
    this.router.navigate([''])
  }, err =>{
    alert('Error al crear el usuario')
    this.router.navigate([''])
  })
}

mostrarPassword(){
  var cambio  = document.getElementById("password") as HTMLInputElement;
  if(cambio.type == "password"){
    cambio.type= "text";
    document.querySelector('span').setAttribute("class", 'bi bi-eye');
  }else{
    cambio.type = "password";
    document.querySelector('span').setAttribute("class", 'bi bi-eye-slash');
  }
} 



}

