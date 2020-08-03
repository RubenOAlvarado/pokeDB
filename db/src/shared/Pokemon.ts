import { Document, Entity, Collection, Entities, Route, Attribute, Index, RouteArg } from 'type-arango';

@Document()
export class Pokemon extends Entity{
    @Index()
    @Attribute()
    pokedexId: number;

    @Attribute()
    name: string;

    @Attribute()
    baseExp: number;

    @Attribute()
    baseLvl: number;

    @Attribute()
    currentLevel: number;

    @Attribute()
    currentExp: number;
}

@Collection(of => Pokemon)
@Route.use('GET', 'POST', 'PATCH')
export class Pokemons extends Entities{
    @Route.GET('/:id=number')
    static GET_POKEMON({param, error}:RouteArg){
        const pokemon = Pokemons.findOne(param.id);
        if(!pokemon) return error('not found');
        return pokemon;
    }
}