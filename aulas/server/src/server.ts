import express from 'express';
import routes from './routes';

const app = express();

app.use(express.json());
app.use(routes);
app.listen(3333);

//GET: Buscar ou listar uma informação
//POST: Criar alguma nova informação
//PUT: Atualizar uma informação existente 
//DELETE: Deletar uma informação existente

//Corpo(Request Body): Dados para criação ou atualização de um registro
//Route Params: Identificar qual recurso eu quero atualizar ou deletar
//Query Params: paginação, fitros, ordenação

