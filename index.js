//importamos las rutas
const pokemonRoutes = require('./src/pokemon/router');

module.context.use('/pokemon', pokemonRoutes);