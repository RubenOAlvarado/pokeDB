"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Pokemons = exports.Pokemon = void 0;
var type_arango_1 = require("type-arango");
var Pokemon = /** @class */ (function (_super) {
    __extends(Pokemon, _super);
    function Pokemon() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        type_arango_1.Index(),
        type_arango_1.Attribute(),
        __metadata("design:type", Number)
    ], Pokemon.prototype, "pokedexId", void 0);
    __decorate([
        type_arango_1.Attribute(),
        __metadata("design:type", String)
    ], Pokemon.prototype, "name", void 0);
    __decorate([
        type_arango_1.Attribute(),
        __metadata("design:type", Number)
    ], Pokemon.prototype, "baseExp", void 0);
    __decorate([
        type_arango_1.Attribute(),
        __metadata("design:type", Number)
    ], Pokemon.prototype, "baseLvl", void 0);
    __decorate([
        type_arango_1.Attribute(),
        __metadata("design:type", Number)
    ], Pokemon.prototype, "currentLevel", void 0);
    __decorate([
        type_arango_1.Attribute(),
        __metadata("design:type", Number)
    ], Pokemon.prototype, "currentExp", void 0);
    Pokemon = __decorate([
        type_arango_1.Document()
    ], Pokemon);
    return Pokemon;
}(type_arango_1.Entity));
exports.Pokemon = Pokemon;
var Pokemons = /** @class */ (function (_super) {
    __extends(Pokemons, _super);
    function Pokemons() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Pokemons_1 = Pokemons;
    Pokemons.GET_POKEMON = function (_a) {
        var param = _a.param, error = _a.error;
        var pokemon = Pokemons_1.findOne(param.id);
        if (!pokemon)
            return error('not found');
        return pokemon;
    };
    var Pokemons_1;
    __decorate([
        type_arango_1.Route.GET('/:id=number'),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", void 0)
    ], Pokemons, "GET_POKEMON", null);
    Pokemons = Pokemons_1 = __decorate([
        type_arango_1.Collection(function (of) { return Pokemon; }),
        type_arango_1.Route.use('GET', 'POST', 'PATCH')
    ], Pokemons);
    return Pokemons;
}(type_arango_1.Entities));
exports.Pokemons = Pokemons;
