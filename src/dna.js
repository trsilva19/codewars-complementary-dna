module.exports = class DNA {

    constructor(sequence) {
        this.sequence = sequence.replace(/\s/g, "");
    }

}