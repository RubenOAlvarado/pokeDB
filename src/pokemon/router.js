const createRouter = require("@arangodb/foxx/router");
const pokemonRouter = createRouter();

pokemonRouter.get('/heartbeat', (req, res) => console.log('Alive!'));


module.exports = pokemonRouter;