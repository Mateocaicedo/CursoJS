function MostrarValores(){
    let formulario = document.forms["formulario"]
    let texto = ""

    for (let i of formulario){
        texto += i.value + "<br/>"
    }

    let nombre = formulario["nombre"];
    let apellido = formulario["apellido"];
    console.log(nombre.value)
    console.log(apellido.value)
    document.getElementById("valores").innerHTML = texto
    console.log(texto)

    let cabecera = document.getElementById("cabecera").innerHTML += "<br/> Nuevo titulo" 

    document.getElementById("cabecera").style.color = "blue"
}
function Cambiarfoto(){ 
    document.getElementById("imagen").src= "https://cdn.plainconcepts.com/wp-content/uploads/2021/12/Web3.0.jpg"
    document.getElementById("imagen").style.width = "450px"
}