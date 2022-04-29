function CambiarTexto(elemento){
    elemento.innerHTML ='Nuevo'

}

function CambiarTexto2(){
    for (let index = 0; index < 10; index++) {
        document.getElementById("mostrar").innerHTML = "<div> <p>Mostrar<p> </div>"
        
    }
    

}


function entrar(){
    let texto =""
    if (navigator.cookieEnabled) {
        texto = "cookies habilitadas"
    }
    document.getElementById("mostrar").innerHTML = texto

}

function Mayuscula(NombreInput){
    NombreInput.value =NombreInput.value.toUpperCase()
}

function rojo(titulo){
    titulo.style.color = "red"
}
function azul(titulo){
    titulo.style.color = "skyblue"
}

//funcion flecha event listener
/*
document.getElementById("apellido").addEventListener('focus',(evento)=>{
    let event = evento.target
    event.style.backgroundColor = "pink"
})
document.getElementById("apellido").addEventListener('blur',(evento)=>{
    let event = evento.target
    event.style.backgroundColor = "white"
})
*/
//reutilizar codigo con eventlistener
/*
document.getElementById("edad").addEventListener('focus',cambiacolor)
document.getElementById("edad").addEventListener('blur',blanco)

function cambiacolor(evento){
    let even = evento.target
    even.style.backgroundColor ="skyblue"
}

function blanco(evento){
    let even = evento.target
    even.style.backgroundColor ="white"
    
}*/

//recuperar el formulario para aplicar estilo a todos los elementos input

const formu = document.getElementById("formulario")
formu.addEventListener('focus', (Event)=>{
    let even = Event.target
    even.style.backgroundColor ="skyblue"
}, true)
formu.addEventListener('blur', (Event)=>{
    let even = Event.target
    even.style.backgroundColor ="white"
}, true)

document.getElementById("titulo").onclick = CambiarTexto2