const { expect } = require('chai');
const request = require("@arangodb/request");
const { baseUrl } = module.context;

describe("Test the pokemon API", () => {
    it("Check if the service is alive", () => {
        console.log(baseUrl);
        const response = request.get(`${baseUrl}/api/heartbeat`);
        expect(response.status).to.equal(200);
        expect(response.body).to.equal("Alive!");
    });

    it("Stores a pokemon", () => {
        const testData = {pokedexId: 7, level: 1, baseExp: 45};
        const response = request.post(`${baseUrl}/api/add`, {body:testData, json:true});
        expect(response.status).to.equal(200);
    });

    it("retrieves a pokemon stored in the db by his id in the pokedex", () => {
        const testId = 5;
        const response = request.get(`${baseUrl}/api/pokedex/${testId}`);
        expect(response.status).to.equal(200);
        //expect(response.body).to.equal({"_key": "330141", "_id": "pokemon/330141", "_rev": "_auz4GmC---", "pokedexId": 5, "level": 1, "baseExp": 5  });
    });
});