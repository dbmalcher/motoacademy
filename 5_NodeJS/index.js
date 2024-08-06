const express = require('express');

const app = express();

app.get('/', (req,res) => {
    res.send({message: "Olá mundo"})
})

app.listen(3000)