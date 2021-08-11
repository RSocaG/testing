import typeOrm  from 'typeorm';
const  { createConnection } = typeOrm;
import { house } from '../house/tables/house.model.js';

export const connection = createConnection({
    type: 'mysql',
    name: 'SINAVIS',
    host: 'localhost',
    port: 3306,
    username: 'roxy',
    password: '12345678',
    database: 'SINAVIS',
    synchronize: true,
    entities: [
        house,
    ],
});

