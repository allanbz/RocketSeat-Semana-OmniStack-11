const express = require('express');
const cors = require('cors');
const { errors } = require('celebrate');
const routes = require('./routes');

const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);
app.use(errors());

/* 
	Rota = caminho, diretório / Recurso = o que será buscado
*/

/*
	Métodos HTTP:

	GET: buscar/listar uma informação no back-end
	POST: criar uma informação no back-end
	PUT: alter uma informação no back-end
	DELETE: deletar uma informação no back-end
*/

/*
	Tipos de parâmetros:

	Query Params: parâmetros NOMEADOS enviados na rota após "?" (filtros, paginação); acesso com req.query; não precisa especificar no método
	Route Params: parâmetros utilizados para identificar recursos (ex: id que vem após a rota); acesso com req.params; precisa especificar no método
	Request Body: corpo da requisição utilizado para criar ou alterar recursos (ex: cadastro); acesso com req.body
*/

/* 
	SQL: MySQL, SQLite, PostgreSQL, Oracle, Microsoft SQL Server
	NoSQL: MongoDB, CouchDB, etc
*/

/* 
	Driver: SELECT * FROM users
	Query Builder: table('users').select('*').where()
*/

module.exports = app;