const DNA = require("../src/dna");
describe('Determine DNA Tests', () => { 

    test("should be return TAACG for input TAACG", async () => {
        let sequence = "TAACG";
        let dna = new DNA(sequence);

        expect(dna.sequence).toBe(sequence);
    });

    test("should be return sequence without space", async () => {
        let sequence = "TA ACG";
        let dna = new DNA(sequence);

        expect(dna.sequence).toBe("TAACG");
    });

    test("should be return sequence without space when send multiple spaces", async () => {
        let sequence = " TA ACG ";
        let dna = new DNA(sequence);

        expect(dna.sequence).toBe("TAACG");
    });

    test("should be return sequence without space when send multiple spaces", async () => {
        let sequence = " TA ACG ";
        let dna = new DNA(sequence);

        expect(dna.sequence).toBe("TAACG");
    });

    test("should be return error when receive an empty sequence", async () => {
        let sequence = "";
        let dna = () => { new DNA(sequence); }
        let error = 'Parameter is empty or null'

        expect(dna).toThrow(error);
    });

    test("should be return error when receive an null sequence", async () => {
        let sequence = null;
        let dna = () => { new DNA(sequence); }
        let error = 'Parameter is empty or null'

        expect(dna).toThrow(error);
    });


});