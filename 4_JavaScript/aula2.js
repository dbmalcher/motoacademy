function func(params){
    console.log(params);
}


const array = ["String", 123, true];

const funcao = func(array[2]);

const nums = [1,2,3,4];
nums.push(5);
console.log(nums);

nums.pop();
console.log(nums);

nums.map( (item) => {
    console.log(item);
})

const numsButNo2 = nums.filter( (item) => item != 2)
console.log(numsButNo2)

for(let i = 0; i < 5; i++){
    console.log(i);
}

let i = 0
while(i < 5){
    console.log(i);
    i++;
}

let j = 0;
do{
    console.log(j)
    j++
}while(j<5)

const pessoas = [
    {
        nome: "Euclides",
        idade: 22,
        profissao: "Analista de sistemas"
    },{
        nome: "Linton",
        idade: 35,
        profissao: "Analista de sistemas"
    },{
        nome: "Adriana",
        idade: 22,
        profissao: "Analista de sistemas"
    },{
        nome: "Francisco",
        idade: 28,
        profissao: "Analista de sistemas"
    }
]

for(let i = 0; i < pessoas.length; i++){
    if(pessoas[i].idade > 22){
        console.log(pessoas[i])
    }
}

pessoas.map( (pessoa) => {
    if(pessoa.idade>22){
        console.log(pessoa.idade)
    }
})

console.log(pessoas.filter((pessoa) => pessoa.idade>22))

console.log(pessoas.filter((pessoa) => pessoa.nome != "Euclides"))