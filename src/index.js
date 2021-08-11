'use strict'

const schema = require('./graphql-builder');

const express = require('express')
const http = require('http')
const ExpressGraphQL = require("express-graphql");

const PORT = 3006
const app = express()//instancia de express

app.use("/graphql", ExpressGraphQL({ schema: schema, graphiql: true}));
const server = http.createServer(app)//instancia del servidor

//servidor escuchando en el puerto 3006
server.listen(PORT, () => {
  console.log(`Server Running on port ${PORT}`)
})
