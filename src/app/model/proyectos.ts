export class Proyectos {

    id? : number;

    tittle : string
    img : string
    link : string
    description : string
   

    constructor(tittle:string, img:string, link:string, description:string ){

        this.tittle = tittle
        this.img = img
        this.link = link
        this.description = description

    
    }
}