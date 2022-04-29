console.log("Saludos desde javascript")
let cabecero = document.getElementById("cabecero")
let parrafo = document.getElementById("parrafo")
console.log(cabecero.innerHTML)
console.log(parrafo.innerHTML)
parrafo.innerHTML ="Nuevo"
cabecero.innerHTML ="Nuevo cabecero"
console.log(cabecero.innerHTML)
console.log(parrafo.innerHTML)

let parrafo2 = document.getElementsByTagName("p")
console.log("numero de parrafos: "+ parrafo2.length)
console.log(parrafo2[1].innerHTML="Real Madrid")


let parrafo3 = document.getElementsByClassName("azul")


for (let i = 0; i < parrafo3.length; i++) {
    console.log(parrafo3[i].innerHTML)
     
}

let elementos = document.querySelectorAll("p.azul")
for(let elem of elementos) {
    console.log(elem.innerHTML)
}