const { db, errors } = require('@arangodb');
const createRouter = require("@arangodb/foxx/router");
const joi = require('joi');

//The pokemons collection
const pokeColl = db._collection('pokemon');
//Initialize the router
const pokemonRouter = createRouter();
//Doc not found code error
const DOC_NOT_FOUND = errors.ERROR_ARANGO_DOCUMENT_NOT_FOUND.code;

pokemonRouter.get('/heartbeat', (req, res) => console.log('Alive!'));

//the api
pokemonRouter.post('/add', (req, res) => {
    const data = req.body;
    const meta = pokeColl.save(req.body);
    res.send(Object.assign(data, meta));
})
.body(joi.object().required(), 'Pokemon to store in the collection.')
.response(joi.object().required(), 'Pokemon stored.')
.summary('Store a pokemon.')
.description('Stores a pokemon selected by the trainer to join in his team.');

module.exports = pokemonRouter;