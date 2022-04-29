/*(function (a,b){
    console.log(a+b)
})(5,6);*/

console.log(re(4,8,6,7))

let x = function (a,b){return a+b};

const sumar = (a,b) => a+b;

resultado=sumar(4,5);


function re(a,b){
    console.log(arguments[2])
    let suma =0
    for (let index = 0; index < arguments.length; index++) {
        suma+= arguments[index];
    }

    return suma

}
console.log(resultado)