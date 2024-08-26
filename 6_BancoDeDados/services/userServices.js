const mysql = require('mysql2/promise')
const config = require('../config/config')

async function getAllUsers(){
    const connection = await mysql.createConnection(config);
    const [results] = await connection.query('SELECT * FROM `alunos`');
    return results; 
}

async function createUser(nome, idade){
    const connection = await mysql.createConnection(config);
    const sql = 'INSERT INTO `alunos` (`nome`,`idade`) VALUES (?, ?)'
    const values = [nome, idade]

    await connection.execute(sql, values)
}

module.exports = {
    getAllUsers,
    createUser
}