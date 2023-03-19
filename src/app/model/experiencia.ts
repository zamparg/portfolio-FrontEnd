export class Experiencia {
    id? : number;

    employer : string
    img : string
    role : string
    duration : string
    tasks : string 

    constructor(employer:string, img:string, role:string, duration:string, tasks:string ){

        this.employer = employer
        this.img = img
        this.role = role
        this.duration = duration
        this.tasks = tasks
    
    }
}