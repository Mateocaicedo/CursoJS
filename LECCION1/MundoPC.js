class DispositivoEntrada {

    constructor(tipoEntrada, marca){
        this._tipoEntrada = tipoEntrada;
        this._marca = marca;
    }
    get TipoEntrada(){
        return this._tipoEntrada;
    }

    set TipoEntrada(tipoEntrada){
        this._tipoEntrada = tipoEntrada;
    }

    get marca(){
        return this._marca;
    }

    set marca(marca){
        return this._marca = marca;
    }

    toString(){
        return "Tipo entrada :"+this._tipoEntrada + " Marca: " + this._marca +"} "
    }

}


class Raton extends DispositivoEntrada{

    static contadorRatones = 0

    constructor(tipoEntrada, marca){
        super(tipoEntrada, marca);
        this._idRaton = ++Raton.contadorRatones
    }

    get idRaton(){
        return this._idRaton
    }

    toString(){ 
        return "ID Raton: "+this.idRaton +", " + super.toString() +" "
    }
}

class Teclado extends DispositivoEntrada{
    static contadorTeclado = 0

    constructor(tipoEntrada, marca){
        super(tipoEntrada, marca);
        this._idTeclado = ++Teclado.contadorTeclado
    }

    get idTeclado(){
        return this._idTeclado
    }

    toString(){ 
        return "ID Teclado: "+this.idTeclado +", "+ super.toString() +" "
    }
}


class Monitor {
    static contadorMonitores =0
    
    constructor(marca, tamaño){
        this._marca = marca
        this._tamaño = tamaño
        this._idMonitor = ++Monitor.contadorMonitores
    }

    get idMonitor(){ return this._idMonitor}
    get marca(){ return this._marca }
    set marca(marca){ this._marca = marca }
    get tamaño(){ return this._tamaño }
    set tamaño(tamaño){ this._tamaño = tamaño}

    toString(){ return "ID Monitor: "+ this._idMonitor + ", Marca :" + this._marca + ", Tamaño :" + this._tamaño}
}


class Computadora {
    static contadorCompu =0
    
    constructor(nombre, Monitor, Teclado, Raton){
        this._nombre = nombre
        this._monitor = Monitor
        this._teclado = Teclado
        this._raton = Raton
        this._idCompu = ++Computadora.contadorCompu
    }

    get nombre(){ return this._nombre}
    set nombre(nombre){ this._nombre = nombre}

    get monitor(){ return this._monitor}
    set monitor(monitor){ this._monitor = monitor}

    get teclado(){ return this._teclado}
    set teclado(teclado){ this._teclado = teclado}

    get raton(){ return this._raton
    }
    set raton(raton){ this._raton = raton}

    get idTeclado(){ return this._idTeclado}

    toString(){
        return "ID: "+this._idCompu +  ", Nombre: "+this._nombre +
        '\n'+"Monitor: "+this._monitor +
        '\n'+"Teclado: "+this.teclado + 
        '\n'+"Raton: "+this.raton
    }

}


class Orden {
    static contadorOrden =0
    
    constructor(){
        this._computadoras = []
        this._idOrden = ++Orden.contadorOrden
    }

    agregarComputadora(computadora){
        this._computadoras.push(computadora)
    }

    mostrarOrden(){
        
        let productos = "";

        for(let item of this._computadoras){
            productos += '\n{'+item.toString() + "}"
        }
        console.log("Orden: " + this._idOrden + ", Computadora: "+ productos )
    }
}

let r1 = new Raton("Rosa", "HP")
let t1 = new Teclado("USB", "HP")
console.log(r1.toString())

let m1 = new Monitor("HP", "15 pulgadas")

let pc1 = new Computadora("HP",m1, t1, r1)
console.log(pc1.toString())

let orden1 = new Orden()
orden1.agregarComputadora(pc1)
orden1.mostrarOrden()