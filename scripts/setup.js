'use strict';
const db = require('@arangodb').db;
const { DOCNAME } = require('../src/config/utils');

if(!db._collection(DOCNAME))
    db._createDocumentCollection(DOCNAME);


module.exports = module.context.collection(DOCNAME);

/*const collectionDocumentNames = ['pokemon', 'trainer'];
const collectionEdgeNames = ['battle', 'team'];

//Cargamos los documentos (vertices)
collectionDocumentNames.forEach(document => {
    if(!db._collection(document))
        db._createDocumentCollection(document);
});

//Cargamos los edges
collectionEdgeNames.forEach(edge => {
    if(!db._collection(edge))
        db._createEdgeCollection(edge);
});

let collections = [...collectionDocumentNames, ...collectionEdgeNames];
const exportedCollections = collections.map( collection => module.context.collection(collection));

module.exports = exportedCollections;*/