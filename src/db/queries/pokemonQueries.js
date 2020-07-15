const { db, aql } = require('@arangodb');
const pokeColl = db._collection('pokemon');

let filter = (pokedexId) => aql.literal(`FILTER p.pokedexId == ${pokedexId}`);

module.exports = {
        save: (pokemon) => pokeColl.save(pokemon),
        findPokemon: (pokedexId) => {

            let result = db._query(aql`
                FOR p IN ${pokeColl}
                    ${filter(pokedexId)}
                RETURN p
            `);

            return result;
        }
};