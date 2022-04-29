let mipromesa = new Promise((resolve, reject) => {
    let expresion = true;
    if (expresion) {
        resolve("Resolvio correcto")
    }else[
        reject("Se produjo un error")
    ]
})

/*mipromesa.then(
    valor => console.log(valor),
    error => console.log(error)
    )
mipromesa
.then(valor => console.log(valor))
.catch(error => console.log(error))*/

let promesa2 = new Promise((resolve) => {

    setTimeout(() => resolve("Saludos desde timeout"),3000)
})

//promesa2.then(valor => console.log(valor))
//Async indica que una funcion regresa una promesa
async function mifuncion() {
    return "MAteo andres Caicedo"
}


//AWAIT Esperar resultado de una promesa
//await solo se puede usar dentro de una funcion declarada con async
//mifuncion().then(valor => console.log(valor))

async function funcionPromesaAwait(){
    let mipromesa = new Promise((resolve =>{
        resolve("promesa con await")
    }))

    console.log(await mipromesa)
}

//funcionPromesaAwait()

//funcion con promis, await y settimeout

async function funcionPromesaAwaitSetTime(){

    console.log("inicio")

    let mipromesa2 = new Promise(resolve =>{
        setTimeout(() => resolve("promesa resolve correct"),3000)
    })
    console.log(await mipromesa2)
}

funcionPromesaAwaitSetTime()