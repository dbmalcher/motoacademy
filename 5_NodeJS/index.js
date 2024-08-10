const express = require('express');

const app = express();
app.use(express.json())

let users =  [
    {id: 1, name: "Euclides"},
    {id: 2, name: "Filipe"}
] 

app.get('/users', (req,res) => {
    res.status(200).json(users);
})

app.post('/users',(req,res) => {
    const name = req.body.name
    const id = users.length + 1

    const newUser = {
        id: id,
        name: name,
    }

    users.push(newUser)
    res.status(201).json(newUser)
})

app.put('/users/:id', (req,res) => {
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

app.delete('/users/:id', (req,res) => {
    const id = parseInt(req.params.id)
    users = users.filter( user => user.id !== id)
    res.sendStatus(204)
})

app.get('/', (req,res) => {
    res.send({message: "Olá mundo"})
})

app.listen(3000)