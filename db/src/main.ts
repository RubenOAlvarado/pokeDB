import { context } from '@arangodb/locals'
import { createRoutes } from 'type-arango'
import createRouter from '@arangodb/foxx/router'

import * as _Entities from './shared';

context.use(
    createRoutes(
        createRouter()
    )
);