const DNA = require("../src/dna");
describe('Determine DNA Tests', () => { 

    test("should be return TAACG for input TAACG", async () => {
        let sequence = "TAACG";
        let dna = new DNA(age, handicap);

        expect(dna.sequence).toBe(sequence);
    });

});