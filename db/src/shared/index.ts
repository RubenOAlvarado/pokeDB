import typeArango, { LogLevel } from 'type-arango';

const complete = typeArango({
    getAuthorizedRoles(){return ['admin']},
    logLevel: LogLevel.Debug
});

export * from './Pokemon';

complete();