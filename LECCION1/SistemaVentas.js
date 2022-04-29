class Producto {
    
    static contadorProducto = 0

    constructor(nombre, precio){

        this._nombre = nombre
        this._precio = precio
        this._idProducto = ++Producto.contadorProducto
    }

    get idProducto(){
        return this._idProducto
    }

    get nombre(){
        return this._nombre
    }

    set nombre(nombre){
        this._nombre = nombre
    }

    get precio(){
        return this._precio
    }

    set precio(precio){
        this._precio = precio
    }

    toString(){
        return "ID: "+ this._idProducto+", Nombre:" + " " + this._nombre + ", Precio:"+" " + this._precio
    }

}

class Orden {


    static MAX_PRODUCTOS = 5

    static contadorOrdenes = 0

    constructor(){
        this._contadorProductosAgregados =0;
        this._idOrden = ++Orden.contadorOrdenes;
        this._productos = []
    }

    get idOrden(){
        return this._idOrden
    }

    agregarProducto(producto){
        if (this._productos.length < Orden.MAX_PRODUCTOS) {
            this._productos.push(producto);
        }else{
            console.log("No se pueden agregar más productos");
        }
       
    }

    calcularTotal(){
        let total = 0;

        for(let item of this._productos){
            total+=item.precio
        }
        return total;
    }
    mostrarOrden(){
        let productos = "";

        for(let item of this._productos){
            productos += '\n{'+item.toString() + "}"
        }
        console.log("Orden: " + this.idOrden + " Total: "+this.calcularTotal()+" Productos: "+productos )
    }

}

let producto1 = new Producto("Camisa", 155)
let producto2 = new Producto("Pantalon", 400)
let producto3 = new Producto("Camisa", 155)
let producto4 = new Producto("Pantalon", 400)
let producto5 = new Producto("Pantalon", 400)
let producto6 = new Producto("Pantalon", 400)
let orden = new Orden()
orden.agregarProducto(producto1)
orden.agregarProducto(producto2)
orden.agregarProducto(producto3)
orden.agregarProducto(producto4)
orden.agregarProducto(producto5)
orden.agregarProducto(producto2)
orden.mostrarOrden()