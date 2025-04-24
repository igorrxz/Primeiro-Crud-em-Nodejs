// Configuração da conexão com o banco de dados MySQL.
// Usa 'mysql' nativo e conecta no banco 'crud' local com usuário 'root'.

import mysql from "mysql"

export const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "root",
    database: "crud"
})