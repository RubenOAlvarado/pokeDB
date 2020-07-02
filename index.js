const db = require('@arangodb').db;
const errors = require('@arangodb').errors;
const collection = db._collection('pokemon');
const DOC_NOT_FOUND = errors.ERROR_ARANGO_DOCUMENT_NOT_FOUND.code;
const joi = require('joi');

//importamos las rutas
const pokemonRoutes = require('./src/pokemon/router');

module.context.use('/pokemon', pokemonRoutes);
