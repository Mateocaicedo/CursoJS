//funcion contructor
function Persona(nombre,apellido,lenguaje){

    this.nombre = nombre;
    this.apellido = apellido;
    this.lenguage = lenguaje;

    this.nombrecompleto = function(){
        return this.nombre 
    }

}
//agregar nuevas variables al constructor
Persona.prototype.tel ="44444"

let padre = new Persona("Juan", "Perez", "ES")
console.log(padre.nombrecompleto())
console.log(padre.tel)
let madre = new Persona("Laura", "Quintero", "EN")
console.log(madre.tel)



let persona ={

    nombre:"mateo",
    apellido:"caicedo",
    lenguage:"es",
    nombrecompleto: function(edad) {
        return this.nombre + " " + this.apellido + " " + edad
    },
    Titulo: function(titulo) {
        return this.nombre + " " + this.apellido + ": " + titulo
    },
    get Nombre() {
        return this.nombre
    },
    get Idiom() {
        return this.lenguage.toUpperCase();
    },
    set Idiom(idiom) {
        this.lenguage = idiom.toUpperCase();
    }


}

//metodo get 
//console.log(persona.Nombre)

let persona2 = new Object();
persona2.nombre = "Real"
persona2.apellido = "Madrid"
//llamar un metodo de un objeto desde otro objeto
console.log(persona.nombrecompleto.call(persona2,"56"))
//apply se le pasa un arreglo, como parametros
console.log(persona.Titulo.apply(persona2, ["Equipo de futbol"]))
//agregar
persona2.nueva = "as"
//eliminar
delete persona2.nombre



array = Object.values(persona2)
Jsonn = JSON.stringify(persona2)

//metodo set 
persona.Idiom = "es"