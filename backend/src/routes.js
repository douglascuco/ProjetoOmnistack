const { Router } = require('express');

const DevController = require('./controllers/DevController');
const SearchController = require('./controllers/SearchController');

const routes = Router();


routes.get('/devs', DevController.index);
routes.post('/devs', DevController.store);

routes.get('/search', SearchController.index);
//TIPOS DE PARAMETROS: 
// Query Params: req.query (filtros, ordenação, paginação)
// Route Params: req.params (identificar um recurso na alteração ou remoção) 
// Body: req.body (criação ou alteração)

module.exports = routes;