const number = 1; //var tipo number
const string = "string"; //var tipo string
const bool = true; //var tipo boolean
const nulo = null; //var tipo null. Vars do tipo undefined não são nulas

const objeto = {
    nome: "",
    idade: 0
};

const array = ["string", 1, false];

const soma  = 1 + 1;
const sub = 1 - 1;
const mult = 1 * 1;
const div = 1 / 1;

//Declaração de variável 
const varConstante = 1; //var que não pode ter seu valor alterado
//vars do tipo const podem ser alteradas caso sejam incialmente declaradas como array e ter valores alterados por meio de métodos de array
//também podem ser alteradas por variáveis dentro de objetos const
let varLet = 1; //var que pode ser alterada normalmente
var varVar = 1; //são vars let que nao tem a limitação de contexto. má prática.