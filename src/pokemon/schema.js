'use strict';

const gql = require('graphql-sync');
const {db} = require('@arangodb');
const { DOCNAME } = require('../config/utils');

const pokeColl = module.context.collection(DOCNAME);


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
                type: new gql.GraphQLString,
                description: 'The name of the pokemon'
            },
            baseLvl:{
                type: new gql.GraphQLString,
                description: 'the level of the pokemon when it was obtain'
            },
            level:{
                type: new gql.GraphQLString,
                description: 'the actual level of the pokemon'
            },
            baseExp:{
                type: new gql.GraphQLString,
                description: 'the experience of the pokemon when it was obtained'
            },
            exp: {
                type: new gql.GraphQLString,
                description: 'the actual exp of the pokemon'
            },
            pokedexId: {
                type: new gql.GraphQLString,
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
                args:{
                    pokedexId:{
                        description: 'the id of the pokemon in the pokedex that you wanna retrieve',
                        type: gql.GraphQLString
                    } 
                },
                resolve(root, args){
                    return db._query(aqlQuery`
                        FOR p IN ${pokeColl}
                            FILTER p.pokedexId == ${req.pathParams.id}
                            RETURN p
                        `).toArray()
                }
            }
        }
    }
});


module.exports = new gql.GrapQLSchema({
    query: queryType
});