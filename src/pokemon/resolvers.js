const {savePokemon, findPokemon} = require('../db/queries/pokemonQueries');

const resolvers = {
    Query:{
        pokemon: (pokedexId) => {

            let poke = findPokemon(pokedexId);

            return {
                pokedexId: poke.pokedexId
            }
        },
    },
    Mutation:{
        savePokemon: (data) => savePokemon(data)
    }
};

module.exports = resolvers;