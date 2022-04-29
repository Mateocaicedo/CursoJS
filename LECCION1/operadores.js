let a = 3
let b = 3
let g = "3"

let z = (a + b)


let c = ++z //pre incremento

console.log(z)

let d = z++ //post incremento
console.log(z)


console.log(b==g)
console.log(b===g)


if ((a+1)%2==0) {
   console.log("par") 
}

let h = (a+1)%2 ?"par":"impar"
console.log(h)



console.log(Number(g) ==3? "si":"no")
