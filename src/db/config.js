import { createConnection, ConnectionOptions } from 'typeorm';
import { house } from '../house/tables/house.model';

export const connection = await createConnection({
    type: 'mysql',
    name: 'conection',
    host: 'localhost',
    port: 3306,
    username: 'roxy',
    password: '123456',
    database: '',
    synchronize: true,
    entities: {
        House: house,
    },
});