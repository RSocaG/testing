'use strict'

const express = require('express')
const http = require('http')
const mysql = require("mysql");

const PORT = 3006
const app = express()//instancia de express

//Database connection
app.use(function(req, res, next){
	res.locals.connection = mysql.createConnection({
		host     : 'localhost',
		user     : 'roxy',
		password : '123456',
		database : 'BDTEST'
	});
	res.locals.connection.connect();
	next();
});


const server = http.createServer(app)//instancia del servidor

//servidor escuchando en el puerto 3006
server.listen(PORT, () => {
  console.log(`Server Running on port ${PORT}`)
})
