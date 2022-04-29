function Funcion1 (){
    console.log("hola")
}

function Funcion2 (){
    console.log("hola2")
}

Funcion1()
Funcion2()


function imprimir (mensaje){
    console.log(mensaje)
}

function suma(a,b, imprimir){
    let res = a +b
    imprimir("Resultado es: "+res)
}

suma(5,6, imprimir)


//llamadas asincronas con timeout

function mifuncionCallBack(){
    console.log("despues de 5 segundos")
}

setTimeout(mifuncionCallBack,3000)

setTimeout(function(){console.log("saludo")},4000)

setTimeout(()=> console.log("saludo3"),6000)


let reloj = () => {
    let fecha = new Date()
    console.log(`${fecha.getHours()} `+": "+ fecha.getMinutes()+" :" + fecha.getSeconds())
}


//setInterval(reloj,1000)

setInterval(function(){})