const express = require('express');

const app = express();
app.use(express.json())

const users =  [
    {id: 1, name: "Euclides"},
    {id: 2, name: "Filipe"}
] 

app.get('/users', (req,res) => {
    res.json(users);
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

app.get('/', (req,res) => {
    res.send({message: "Olá mundo"})
})

app.listen(3000)