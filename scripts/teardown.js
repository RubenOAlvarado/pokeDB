'use strict';

const {db} = require('@arangodb');
const { DOCNAME } = require('../src/config/utils');

db._drop(module.context.collection(DOCNAME));