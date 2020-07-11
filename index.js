'use strict';

const schema = require('./src/pokemon/schema');
const gql = require('graphql-sync');
const graphql = gql.graphql;
const formatError = gql.formatError;
const createGraphqlRouter = require('@arangodb/foxx/graphql');


const router = createGraphqlRouter({schema, graphiql: true})
                .summary('pokeBD GraphQL endpoint')
                .description('exposes the pokeDB in graphQL');


module.context.use(router);