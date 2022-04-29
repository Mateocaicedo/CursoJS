let arr = [
  "rojo",
  "verde",
  "amarillo",
  "azul",
  "rosado",
  "negro",
  "blanco",
  "marron",
];

/*while (cont <3){

    console.log(cont)
    cont++

}
*/
function par(arr){
    let r = 0;
    do {
      r = Math.round(Math.random()*arr.length-1);
    } while (r % 2 == 0);

    console.log(arr[r])
}

par(arr);
