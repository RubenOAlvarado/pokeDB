'use strict';

const expect = require('chai').expect;
const schema = require('../src/pokemon/schema');
const graphql = require('graphql-sync').graphql;

describe('PokeDB query test', () => {
    it('retrieves a pokemon by his id in the pokedex', () => {
        const query = `
            query pokemon{
                pokemon(pokedexId: "5"){
                    name
                }
            }
        `;

        const expected = {
            name: 'charmander'
        }

        const result = graphql(schema, query);
        expect(result).not.to.have.a.property('errors');
        expect(result.data).to.eql(expected);
    });
});