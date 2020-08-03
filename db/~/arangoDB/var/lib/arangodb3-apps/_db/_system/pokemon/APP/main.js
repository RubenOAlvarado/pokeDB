"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var locals_1 = require("@arangodb/locals");
var type_arango_1 = require("type-arango");
var router_1 = __importDefault(require("@arangodb/foxx/router"));
locals_1.context.use(type_arango_1.createRoutes(router_1.default()));
