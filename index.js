'use strict';

const schema = require('./src/pokemon/schema');
const graphql = require('graphql');
const createGraphqlRouter = require('@arangodb/foxx/graphql');


const router = createGraphqlRouter({
    schema, 
    graphiql: true,
    graphql: graphql
})
.summary('pokeBD GraphQL endpoint')
.description('exposes the pokeDB in graphQL');


module.context.use(router);