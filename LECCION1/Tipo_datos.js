//Tipo de dato object

var object = {
    nombre : "Mateo", 
    Apellido : "Caicedo",
    Telefone : "59595"
};

var array = ["Mateo", "Caicedo", "Telefone"];

function miFuncion(array){
    for (let index = 0; index < array.length; index++) {
        const element = array[index];
        console.log(element)
    }

}

var simbol = Symbol("Simbolo")
console.log(simbol)

class Persona{
    constructor(nombre, apellido, telefone){
        this.nombre = nombre;
        this.apellido = apellido;
        this.telefone = telefone;
    }
}

p = new Persona();
p.apellido = object.Apellido
p.nombre = object.nombre
p.telefone = object.Telefone

console.log(p)


console.log(Persona)


//concatenar archivos

var nombre = "juan"
var apellido = "Perez"

var name = nombre+" "+apellido


var nameced =  name + (5+4)
console.log(nameced)