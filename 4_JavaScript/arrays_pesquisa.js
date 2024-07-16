const arrayExemplo = [1,2,3,4,5,6,7,8,9]

console.log(arrayExemplo.find((num) => num >= 3))

console.log(arrayExemplo.findIndex((num) => num === 2))

console.log(arrayExemplo.indexOf(5))

console.log(arrayExemplo.some((num) => num === 7))

console.log(arrayExemplo.every((num) => num === 2))

arrayExemplo.fill(2)

console.log(arrayExemplo.every((num) => num === 2))