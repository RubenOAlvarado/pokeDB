'use strict';

const { makeExecutableSchema } = require('@graphql-tools/schema');
const resolvers = require('../pokemon/resolvers');
const typeDefs = require('../pokemon/typeDefs');


module.exports = makeExecutableSchema({
    typeDefs,
    resolvers
});