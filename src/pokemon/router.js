const createRouter = require("@arangodb/foxx/router");
const joi = require('joi');
const { db, errors, aql, query } = require('@arangodb');
//Doc not found code error
const DOC_NOT_FOUND = errors.ERROR_ARANGO_DOCUMENT_NOT_FOUND.code;
//The pokemons collection
const pokeColl = db._collection('pokemon');
//imports the controller
//const pokeController = require('./controller');
//Initialize the router
const pokemonRouter = createRouter();

pokemonRouter.get('/heartbeat', (req,res) => res.send('Alive!'));

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

pokemonRouter.get('/pokemon/:id', (req,res) => {
    try {
        const data = pokeColl.document(req.pathParams.id);
        res.send(data);
    } catch (error) {
        if(!error.isArangoError || error.errorNum !== DOC_NOT_FOUND)
            throw error;
    
        res.throw(404, 'The pokemon is not in the collection', error);
    }
} )
.pathParam('id', joi.number().required(), 'Id of the pokemon in the database.')
.response(joi.object().required(), 'Data for the pokemon looked.')
.summary('Looks up for a pokemon.')
.description('Retieves a pokemon for the "pokemon" collection by his id in the database.');


pokemonRouter.get('/pokedex/:id', (req, res) => {
    const pokemon = query`
        FOR p IN ${pokeColl}
            FILTER p.pokedexId == ${req.pathParams.id}
            RETURN p
    `.toArray();

    res.json(pokemon);
})
.pathParam('id', joi.number().required(), 'Id of the pokemon in the pokedex.')
.response(joi.object().required(), 'Data for the pokemon looked.')
.summary('Looks up for a pokemon.')
.description('Retieves a pokemon for the "pokemon" collection by his id in the pokedex.');

module.exports = pokemonRouter;