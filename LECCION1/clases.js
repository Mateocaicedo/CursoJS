class Persona {
    
    static contadorPersona = 0
    constructor(nombre, apellido, edad){
        this._nombre = nombre;
        this._edad = edad;
        this._apellido = apellido;
        this._iDPersona = ++Persona.contadorPersona
    }

    get idPersona(){
        return this._iDPersona;
    }
    get nombre(){
        return this._nombre;
    }
    set nombre(nombre){
        this._nombre = nombre;
    }

    get edad(){
        return this._edad;
    }
    set edad(edad){
        return this._edad = edad;
    }
    
    get apellido(){
        return this._apellido;
    }

    set apellido(apellido){
        return this._apellido = apellido;
    }


    toString(){
        return this._iDPersona+" " +this._nombre +" "+ this._apellido +" "+ this._edad 
    }
    
    
}



class Empleado extends Persona {
    static contadorEmpleado = 0
    constructor(nombre, apellido,edad, sueldo){
        super(nombre, apellido,edad);
        this._sueldo = sueldo
        this._idEMpleado = ++Empleado.contadorEmpleado
        
    }

    get idEmpleado(){
        return this._idEMpleado
    }
    get sueldo(){
        return this._sueldo
    }

    set sueldo(sueldo){
        return this.sueldo = sueldo;
    }

    toString(){
        return this.idEmpleado +" " +super.nombre+ " " +super.apellido + " " +super.edad+" "+ this._sueldo
    }

}


class Cliente extends Persona{

   static contadorCliente = 0
   
   constructor(nombre, apellido, edad, fecha_registro){
       super(nombre, apellido, edad)
       this._idCliente = ++Cliente.contadorCliente
       this._fecha_registro = fecha_registro;
   }

   get idCliente(){
       return this._idCliente;
   }

   get fecha_registro(){
       return this._fecha_registro
   }

   set fecha_registro(fecha_registro){
       this._fecha_registro = fecha_registro
   }

   toString(){
    return this.idCliente +" " +super.nombre+ " " +super.apellido + " " +super.edad+" "+this.fecha_registro
   }
}

let em = new Empleado("Mateo", "Caicedo",20,1200000 )
let em2 = new Empleado("Real", "Caicedo",20,1200000 )

let cliente = new Cliente("Astrid", "Caicedo",20, new Date() )
let persona = new Persona("Roberto", "Caicedo",50)
let p = new Persona("Robert", "John", 20) 

console.log(p.toString())
console.log(persona.toString())
console.log(em.toString())
console.log(em2.toString())
console.log(cliente.toString())