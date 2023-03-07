export class Persona {
    id?:number;
    name:String;
    description:String;
    about:String;
    img:String

    constructor(name:String, description:String, about:String, img:String){
        this.name = name;
        this.description = description;
        this.about = about;
        this.img = img;
    }
} 