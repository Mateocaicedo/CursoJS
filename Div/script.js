let box = document.getElementsByClassName("box")[0]
const img = document.createElement("img");
img.src = 'Captura.PNG';
box.addEventListener('click', ()=>{
    console.log(box.childNodes.length)
    if (box.childNodes.length <=1) {
        console.log("vacio")
        document.querySelector('.box').appendChild(img)
    }else{
        console.log("lleno");
    }

}, false)
