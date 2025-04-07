
const express = require('express');
const mysql = require('mysql2');
const cors = require('cors');


const  app = express();
app.use(cors());
app.use(express.json());

//CONFIGURAÇÃO DO BANCO DE DADOS
const db = mysql.creatConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'js_mysql'
});

//CONECTAR AO BANCO DE DADOS
db.connect( err => {

    if( err ){
        console.log("Erro ao conectar com o banco de dados!", err);
    }

    console.log("Conectado ao MySql!");
})