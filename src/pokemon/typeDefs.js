module.exports = `
    type Pokemon{
        _id: ID!
        _key: Int!
        _rev: Int
        name: String
        baseLvl: Int
        level: Int
        baseExp: Int
        exp: Int
        pokedexId: Int!
    }

    input PokemonInput{
        name: String
        baseLvl: Int
        level: Int
        baseExp: Int
        exp: Int
        pokedexId: Int!
    }

    type Query{
        pokemon(pokedexId: Int!): Pokemon
    }

    type Mutation{
        savePokemon(input: PokemonInput): Pokemon
    }

    schema {
        query: Query
        mutation: Mutation
    }
`;