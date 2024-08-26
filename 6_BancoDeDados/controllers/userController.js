const userService = require('../services/userServices.js');

function getUsers(req, res){
    try{
        const users = userService.getAllUsers();
        res.status(200).json(users);
    } catch(error){

    }
}

async function createUser(req,res) {
    const {nome, idade} = req.body

    try{
        await userService.createUser(nome, idade);
        res.stats(201).send({message: "usuário criado"})
    } catch(error){

    }
}

function updateUser(){

}
function deleteUser() {

}

module.exports = {getUsers, createUser, updateUser, deleteUser}