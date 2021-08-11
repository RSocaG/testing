'use strict'


import  express from 'express';

import * as http from 'http';
import {graphqlHTTP} from "express-graphql";
import { schema } from './graphql-builder.js';

const PORT = 3001
const app = express()//instancia de express

app.use("/graphql", graphqlHTTP({ schema: schema, graphiql: true,}));
const server = http.createServer(app)//instancia del servidor

//servidor escuchando en el puerto 3006
server.listen(PORT, () => {
  console.log(`Server Running on port ${PORT}`)
})
