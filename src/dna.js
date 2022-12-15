module.exports = class DNA {

    constructor(sequence) {
        if (sequence === "") {
            throw new TypeError('Parameter is empty or null');
        }

        this.sequence = sequence.replace(/\s/g, "");
    }

}