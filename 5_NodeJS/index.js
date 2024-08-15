const express = require('express');

const app = express();

app.use(express.json())

const loginAuthentication = (req, res, next) => {
    const logado = req.headers.authorization == "Bearer tokenValido"
    if(logado){
        next()
    } else {
        res.status(401).json({message: "Por favor verifique suas credenciais"})
    }
}

let users =  [
    {id: 1, name: "Euclides", email:"eu@mail.com", senha:"12345"},
    {id: 2, name: "Filipe", email:"vc@mail.com", senha:"12345"}
] 

app.get('/users', loginAuthentication, (req,res) => {
    res.status(200).json(users);
})

app.post('/login', (req,res) => {
    const { name, email, senha} = req.body
    const user = users.find(user => user.email == email && user.senha == senha)
    if(user){
        res.json({message: "Login bem sucedido", token: "tokenValido"})
    } else {
        res.json({message: "Credenciais Inválidas"})
    }
})

app.post('/users', loginAuthentication,(req,res) => {
    const name = req.body.name
    const id = users.length + 1

    const newUser = {
        id: id,
        name: name 
    }

    users.push(newUser)
    res.status(201).json(newUser)
})

app.put('/users/:id', loginAuthentication, (req,res) => {
    const id = parseInt(req.params.id)
    const { name } = req.body //pega o body que vai ser alterado
    const userIndex = users.findIndex( user => user.id == id) //procura o index na array do objeto que tem o id == id

    if(userIndex != -1){
        users[userIndex].name = name
        res.json(users[userIndex])
    } else {
        res.status(400).json({message: 'Usuário não encontrado'})
    }
})

app.delete('/users/:id', loginAuthentication, (req,res) => {
    const id = parseInt(req.params.id)
    users = users.filter( user => user.id !== id)
    res.sendStatus(204)
})

app.get('/', loginAuthentication, (req,res) => {
    res.send({message: "Olá mundo"})
})

app.listen(3000)