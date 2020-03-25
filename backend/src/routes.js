const express = require('express');

const OngController = require('./controllers/OngController');
const incidentController = require('./controllers/incidentController');
const ProfileController = require('./controllers/ProfileController');
const SessionController = require('./controllers/SessionController');



//const connection = require('./database/connection');

const routes = express.Router();

routes.post('/sessions', SessionController.create);

routes.get('/ongs', OngController.index );
routes.post('/ongs', OngController.create);

routes.get('/profile', ProfileController.index);

routes.get('/incidents', incidentController.index);
routes.post('/incidents', incidentController.create);
routes.delete('/incidents/:id', incidentController.delete);


  //const body = request.body;
  //console.log(body);
module.exports = routes;
