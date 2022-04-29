'use strict'
try {
    let x = 10; 

    throw "Solo letras"

}catch(e){
    console.log(e)
}finally{
    console.log("termina la revision")
}
console.log("sss")


let resultado = "hola"

try { 
    if (isNaN(resultado)){
        throw "No es un numero"
    }

}catch(e){
    console.log(e)
    console.log(e.name)
    console.log(e.message)
}