import knex from 'knex';
import path from 'path';

//migration = controlam a versão do banco de dados

const db = knex({
    client: 'sqlite3',
    connection: {
        filename: path.resolve(__dirname, 'connection', 'database.sqlite')
    },
    useNullAsDefault: true,
})

export default db;