'use strict';

const gql = require('graphql-sync');
const { db } = require("@arangodb");

//exporting queries
const getPokeByPokedexId = require('../db/queries/getPokeByPokedexId');

let pokemonType;


pokemonType = new gql.GraphQLObjectType({
    name: 'Pokemon',
    description: 'it stores the pokemon that has a trainer',
    fields(){
        return{
            id:{
                type: new gql.GraphQLNonNull(gql.GraphQLString),
                description: 'the id of the pokemon',
                resolve(pokemon){
                    return pokemon._key;
                }
            },
            name:{
                type: gql.GraphQLString,
                description: 'The name of the pokemon'
            },
            baseLvl:{
                type: gql.GraphQLString,
                description: 'the level of the pokemon when it was obtain'
            },
            level:{
                type: gql.GraphQLString,
                description: 'the actual level of the pokemon'
            },
            baseExp:{
                type: gql.GraphQLString,
                description: 'the experience of the pokemon when it was obtained'
            },
            exp: {
                type: gql.GraphQLString,
                description: 'the actual exp of the pokemon'
            },
            pokedexId: {
                type: gql.GraphQLString,
                description: 'the id of the pokemon in the pokedex'
            }
        }
    } 
});

const queryType = new gql.GraphQLObjectType({
    name: 'Query',
    fields(){
        return{
            pokemon:{
                type: pokemonType,
                description: 'retrieves a pokemon by his pokedexid',
                args:{
                    pokedexId:{
                        description: 'the id of the pokemon in the pokedex that you wanna retrieve',
                        type: gql.GraphQLString
                    } 
                },
                resolve(root, args){
                    return db._query(getPokeByPokedexId(args.pokedexId))
                }
            }
        }
    }
});


module.exports = new gql.GraphQLSchema({
    query: queryType
});