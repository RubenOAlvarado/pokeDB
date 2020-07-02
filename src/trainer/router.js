const createRouter = require("@arangodb/foxx/router");
const trainerRouter = createRouter();

trainerRouter.get('/heartbeat', (req, res) => res.send('Hello trainer')); 

module.exports = trainerRouter;