export class NuevoUsuario {
    nombre!: string;
    nombreUsuario!: string;
    email!: string;
    password!: string
    authorities!: string[]

    constructor(nombre:string, nombreUsuario:string, email:string, password:string, authorities:string[]){
        this.nombre=nombre
        this.nombreUsuario = nombreUsuario;
        this.password = password;
        this.email= email
        this.password=password
        this.authorities!=authorities
    }
}
