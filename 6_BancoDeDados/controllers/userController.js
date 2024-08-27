const userService = require('../services/userServices.js');

async function getUsers(req, res){
    try{
        const users = await userService.getAllUsers();
        res.status(200).json(users);
    } catch(error){

    }
}

async function createUser(req,res) {
    const {id, nome, idade, email, senha} = req.body

    try{
        await userService.createUser(id, nome, idade, email, senha);
        res.status(201).send({message: "usuário criado"})
    } catch(error){

    }
}

async function updateUser(req, res){
    const {id} = req.params;
    const {nome} = req.body;
    try{
        await userService.updateUser(id, nome)
        res.status(200).json({message:"Alteração feita com sucesso"})
    }catch(error){
        console.log(error)
        res.status(500).json({message: "Erro ao atualizar o usuário"})
    }
}

async function deleteUser(req,res) {
    const {id} = req.params;

    try{
        await userService.deleteUser(id);
        res.status(204).json({message: "Ele foi morto"});
    } catch(error){

    }
}

module.exports = {getUsers, createUser, updateUser, deleteUser}