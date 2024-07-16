const arrayExemplo = ["primeira entrada", "segunda entrada", "terceira entrada"]

console.log(arrayExemplo.join(" // "))

const arrayParaSlice = ["A","B","C","B"]

console.log(arrayParaSlice.slice(1,3))

console.log(arrayParaSlice.sort())

console.log(arrayParaSlice.fill("C", 2))

console.log(arrayParaSlice.pop())
console.log(arrayParaSlice.shift())
console.log(arrayParaSlice)

const arrayNumerico = [3,4,2,6,1,7,2]

function compara(num1, num2){
    return num1 - num2
}

console.log(arrayNumerico.sort(compara))

console.log(arrayNumerico.find((num) => num > 2))