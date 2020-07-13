'use strict';
const { aql, db } = require("@arangodb");
const pokeColl = db._collection("pokemon");

let filter = pokedexId => aql.literal(`FILTER poke.pokedexId == ${pokedexId}`);

//let filter = aql.literal('FILTER poke.pokedexId == "5"');

module.exports = pokedexId => aql`
    FOR poke IN ${pokeColl}
        ${filter(pokedexId)}
        RETURN poke
    `;