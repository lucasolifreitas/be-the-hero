const express = require('express');

const OngController = require('./controllers/OngController');
const IncidentController = require('./controllers/IncidentController');
const ProfileController = require('./controllers/ProfileController');
const SessionController = require('./controllers/SessionController');




const routes = express.Router();


routes.post('/sessions', SessionController.create);

routes.get('/profile', ProfileController.index);

routes.post('/ongs', OngController.create);
routes.get('/ongs', OngController.index);

routes.post('/incidents', IncidentController.create)
routes.get('/incidents', IncidentController.index)
routes.delete('/incidents/:id', IncidentController.delete)

module.exports = routes;



/*
METODOS HTTP:

GET: Buscar/listar uma informação do back-end
POST: Criar uma informação no back-end
PUT: Alterar uma informação no back-end
DELETE: Deletar uma informação no back-end

*/

/*
TIPOS DE PARÂMETROS:

Query Params: Parametros nomeados enviados na rota apos '?' (Filtros, paginação)
Route Params: Parametros utilizados para identificar recursos
Request Body: Corpo da requisição, utilizado para criar ou alterar recursos

*/

/*


*/
