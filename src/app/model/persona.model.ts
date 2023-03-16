export class Persona {
    id?:number;
    name:string;
    description:string;
    about:string;
    img:string

    constructor(name:string, description:string, about:string, img:string){
        this.name = name;
        this.description = description;
        this.about = about;
        this.img = img;
    }
} 