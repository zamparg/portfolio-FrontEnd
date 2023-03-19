export class Experiencia {
    id? : number;

    employer : string
    img : string
    role : string
    duration : string
    task : string 

    constructor(employer:string, img:string, role:string, duration:string, task:string ){

        this.employer = employer
        this.img = img
        this.role = role
        this.duration = duration
        this.task = task
    
    }
}