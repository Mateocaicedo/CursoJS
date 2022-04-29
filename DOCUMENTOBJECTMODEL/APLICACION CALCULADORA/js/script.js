function sumar() {
    let forma = document.getElementById("forma")
    let operandoA = forma["operandoA"]
    let operandoB = forma["operandoB"]

    let resultado = parseInt(operandoA.value) + parseInt(operandoB.value)

    if (isNaN(resultado)){
        document.getElementById("resultado").innerHTML = "Hay campos vacios"
    }else{
        document.getElementById("resultado").innerHTML = "Resultado: "+resultado
    }
    

}